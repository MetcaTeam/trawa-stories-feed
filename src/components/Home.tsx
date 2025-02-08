import React, { useEffect, useMemo, useState } from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import CreditsComponent from './CreditsComponent';
import { useNavigate } from 'react-router-dom';
import { getCurrentMonthAndYear } from '../utils/dateUtils';
import { supabase } from '../connection/supabaseClient';
import { registerOrUpdateUser } from '../services/userService';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  key: string;
  image?: string;
}

const Home: React.FC = () => {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});
  // Состояния для лайков: userLikes хранит для каждой категории, лайкнул ли пользователь; likeCounts — общее число лайков
  const [userLikes, setUserLikes] = useState<{ [categoryId: string]: boolean }>({});
  const [likeCounts, setLikeCounts] = useState<{ [categoryId: string]: number }>({});
  
  // Добавляем состояние для внутреннего UUID пользователя
  const [userId, setUserId] = useState<string | null>(null);

  const navigate = useNavigate();
  const currentMonthAndYear = useMemo(() => getCurrentMonthAndYear(), []);

  // Получаем текущий Telegram ID пользователя
  const telegramUserId = useMemo(() => {
    return window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
  }, []);

  // Загружаем внутренний UUID пользователя из таблицы users и сохраняем в состоянии
  useEffect(() => {
    if (!telegramUserId) return;
    
    const fetchUserId = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('telegram_id', telegramUserId)
        .maybeSingle(); // Используем maybeSingle, чтобы не было ошибки, если записи нет
      if (error) {
        console.error('Error fetching user:', error.message);
      } else if (data) {
        setUserId(data.id);
      }
    };
    
    fetchUserId();
  }, [telegramUserId]);

  // Регистрируем/обновляем пользователя
  useEffect(() => {
    registerOrUpdateUser();
  }, []);

  // Загружаем категории
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sequence', { ascending: false });
      if (error) {
        console.error('Error fetching category items:', error.message);
      } else {
        setCategoryItems(data || []);
      }
    };
    fetchCategories();
  }, []);

  // Загружаем лайки для всех категорий
  useEffect(() => {
    // Если внутренний userId не получен или категории не загружены, выходим
    if (!userId || categoryItems.length === 0) return;

    const fetchLikes = async () => {
      const { data, error } = await supabase.from('likes').select('*');
      if (error) {
        console.error('Error fetching likes:', error.message);
        return;
      }
      // Создаем объекты для подсчета лайков и проверки, лайкнул ли пользователь
      const counts: { [categoryId: string]: number } = {};
      const likedByUser: { [categoryId: string]: boolean } = {};
      data?.forEach((like: any) => {
        const catId = like.category_id;
        counts[catId] = (counts[catId] || 0) + 1;
        if (like.user_id === userId) {
          likedByUser[catId] = true;
        }
      });
      setLikeCounts(counts);
      setUserLikes(likedByUser);
    };

    fetchLikes();
  }, [userId, categoryItems]);

  const handleImageError = (key: string) => {
    setImageLoadErrors((prevErrors) => ({
      ...prevErrors,
      [key]: true,
    }));
  };

  const redirectToStory = (categoryItem: CategoryItem) => {
    navigate(`/story/${categoryItem.key}`);
  };

  // Функция для обработки клика по лайку
  const handleLikeClick = async (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation();
    if (!userId) {
      console.error('User ID не найден');
      return;
    }
    const isLiked = userLikes[categoryId] || false;
    if (isLiked) {
      // Удаляем лайк
      const { error } = await supabase
        .from('likes')
        .delete()
        .match({ category_id: categoryId, user_id: userId });
      if (error) {
        console.error('Ошибка при удалении лайка:', error.message);
      } else {
        setUserLikes((prev) => ({ ...prev, [categoryId]: false }));
        setLikeCounts((prev) => ({
          ...prev,
          [categoryId]: Math.max((prev[categoryId] || 1) - 1, 0),
        }));
      }
    } else {
      // Добавляем лайк
      const { error } = await supabase.from('likes').insert({
        category_id: categoryId,
        user_id: userId,
      });
      if (error) {
        console.error('Ошибка при добавлении лайка:', error.message);
      } else {
        setUserLikes((prev) => ({ ...prev, [categoryId]: true }));
        setLikeCounts((prev) => ({
          ...prev,
          [categoryId]: (prev[categoryId] || 0) + 1,
        }));
      }
    }
  };

  const renderCategoryItem = () => {
    return categoryItems.map((categoryItem) => {
      const isError = imageLoadErrors[categoryItem.key];
      const isLiked = userLikes[categoryItem.id] || false;
      const count = likeCounts[categoryItem.id] || 0;

      return (
        <div
          className="flex flex-col md:flex-row justify-start items-start mb-6 cursor-pointer bg-gray-800 rounded-lg shadow-md overflow-hidden"
          key={categoryItem.id}
          onClick={() => redirectToStory(categoryItem)}
        >
          <div className="flex-shrink-0 w-full md:w-48">
            {!isError && categoryItem.image ? (
              <img
                src={categoryItem.image}
                alt={categoryItem.name}
                className="w-full h-full object-cover"
                onError={() => handleImageError(categoryItem.key)}
              />
            ) : (
              <div className="w-full h-48 md:h-full flex justify-center items-center bg-gray-700">
                <categoryItem.icon className="text-4xl text-white" />
              </div>
            )}
          </div>
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-left flex flex-col justify-between p-4 w-full">
            <div>
              <div className="text-xl font-regular text-white">{categoryItem.name}</div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-400 mt-2">
                  Trawa | {currentMonthAndYear}
                </div>
                <div className="flex items-center mt-2">
                  <FaHeart
                    onClick={(e) => handleLikeClick(e, categoryItem.id)}
                    className={`mr-2 cursor-pointer ${
                      isLiked ? 'text-red-500' : 'text-gray-400'
                    } hover:text-red-500`}
                  />
                  <span className="text-sm text-gray-400 mr-4">{count}</span>
                  <FaShareAlt className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="header flex justify-between items-center p-4 text-3xl font-regular bg-gray-800">
        <div>Trawa</div>
        <div className="cursor-pointer" onClick={() => setCreditsPopUpOpen(true)}>
          {/* Здесь можно разместить иконку или текст для открытия CreditsComponent */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-md p-4">{renderCategoryItem()}</div>
      </div>
      {isCreditsPopUpOpen && <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />}
    </div>
  );
};

export default Home;
