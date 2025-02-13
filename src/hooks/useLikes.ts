import { useEffect, useState } from 'react';
import { supabase } from '../connection/supabaseClient';
import { CategoryItem } from './useCategories';

interface LikesState {
  userLikes: { [categoryId: string]: boolean };
  likeCounts: { [categoryId: string]: number };
}

export const useLikes = (userId: string | null, categories: CategoryItem[]): LikesState => {
  const [userLikes, setUserLikes] = useState<{ [categoryId: string]: boolean }>({});
  const [likeCounts, setLikeCounts] = useState<{ [categoryId: string]: number }>({});

  // Функция загрузки лайков
  const fetchLikes = async () => {
    if (!userId || categories.length === 0) return;
    const { data, error } = await supabase.from('likes').select('*');
    if (error) {
      console.error('Error fetching likes:', error.message);
      return;
    }
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

  // Загружаем лайки при изменении userId или списка категорий
  useEffect(() => {
    fetchLikes();
  }, [userId, categories]);

  // Подписка на изменения в таблице likes с использованием supabase.channel()
  useEffect(() => {
    if (!userId) return;

    const channel = supabase
      .channel('public:likes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'likes' },
        (payload) => {
          console.log('Likes subscription payload:', payload);
          // Обновляем лайки после любого изменения
          fetchLikes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, categories]);

  return { userLikes, likeCounts };
};
