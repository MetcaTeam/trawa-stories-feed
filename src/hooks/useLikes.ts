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

  useEffect(() => {
    if (!userId || categories.length === 0) return;

    const fetchLikes = async () => {
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

    fetchLikes();
  }, [userId, categories]);

  return { userLikes, likeCounts };
};
