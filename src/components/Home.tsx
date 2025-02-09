// src/components/Home.tsx
import React, { useState, useMemo } from 'react';
import CreditsComponent from './CreditsComponent';
import { useNavigate } from 'react-router-dom';
import { getCurrentMonthAndYear } from '../utils/dateUtils';
import { useUser } from '../hooks/useUser';
import { useCategories } from '../hooks/useCategories';
import { useLikes } from '../hooks/useLikes';
import CategoryCard from './CategoryCard';
import { supabase } from '../connection/supabaseClient';

const Home: React.FC = () => {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();
  const currentMonthAndYear = useMemo(() => getCurrentMonthAndYear(), []);

  // Получаем пользователя, категории и лайки через кастомные хуки
  const user = useUser();
  const categories = useCategories();
  const { userLikes, likeCounts } = useLikes(user?.id || null, categories);

  const handleImageError = (key: string) => {
    setImageLoadErrors((prev) => ({ ...prev, [key]: true }));
  };

  const redirectToStory = (categoryKey: string) => {
    navigate(`/story/${categoryKey}`);
  };

  const handleLikeClick = async (categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      console.error('User not found');
      return;
    }
    const isLiked = userLikes[categoryId] || false;
    if (isLiked) {
      const { error } = await supabase
        .from('likes')
        .delete()
        .match({ category_id: categoryId, user_id: user.id });
      if (error) {
        console.error('Error removing like:', error.message);
      }
    } else {
      const { error } = await supabase.from('likes').insert({
        category_id: categoryId,
        user_id: user.id,
      });
      if (error) {
        console.error('Error adding like:', error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="header flex justify-between items-center p-4 text-3xl font-regular bg-gray-800">
        <div>Trawa</div>
        <div className="cursor-pointer" onClick={() => setCreditsPopUpOpen(true)}>
          {/* Кнопка открытия CreditsComponent */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-md p-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isLiked={userLikes[category.id] || false}
              count={likeCounts[category.id] || 0}
              onLike={handleLikeClick}
              onClick={() => redirectToStory(category.key)}
              onImageError={handleImageError}
              imageError={!!imageLoadErrors[category.key]}
              currentMonthAndYear={currentMonthAndYear}
            />
          ))}
        </div>
      </div>
      {isCreditsPopUpOpen && <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />}
    </div>
  );
};

export default Home;
