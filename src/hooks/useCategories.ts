import { useEffect, useState } from 'react';
import { supabase } from '../connection/supabaseClient';

export interface CategoryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  key: string;
  image?: string;
}

export const useCategories = (): CategoryItem[] => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sequence', { ascending: false });
      if (error) {
        console.error('Error fetching category items:', error.message);
      } else {
        setCategories(data || []);
      }
    };
    fetchCategories();
  }, []);

  return categories;
};
