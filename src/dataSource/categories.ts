import { FaAppleAlt, FaCarrot, FaFish, FaLeaf, FaSeedling, FaBlender, FaDrumstickBite, FaEgg, FaBreadSlice } from 'react-icons/fa';

export interface CategoryItem {
  name: string;
  icon: React.ElementType;
  key: string;
}

const categoryItems: CategoryItem[] = [
  {
    name: 'Так ли полезны яблоки?',
    icon: FaAppleAlt,
    key: 'fruits',
  },
  {
    name: 'Топ-10 овощей для похудения',
    icon: FaCarrot,
    key: 'vegetables',
  },
  {
    name: 'Рыба',
    icon: FaFish,
    key: 'seafood',
  },
  {
    name: 'Зелень',
    icon: FaLeaf,
    key: 'herbs',
  },
  {
    name: 'Семена',
    icon: FaSeedling,
    key: 'seeds',
  },
  {
    name: 'Смузи',
    icon: FaBlender,
    key: 'smoothies',
  },
  {
    name: 'Птица',
    icon: FaDrumstickBite,
    key: 'poultry',
  },
  {
    name: 'Яйца',
    icon: FaEgg,
    key: 'eggs',
  },
  {
    name: 'Хлеб',
    icon: FaBreadSlice,
    key: 'bread',
  },
];

export default categoryItems;
