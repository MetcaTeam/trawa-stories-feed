import { FaAppleAlt, FaCarrot, FaFish, FaLeaf, FaSeedling, FaBlender, FaDrumstickBite, FaEgg, FaBreadSlice } from 'react-icons/fa';

export interface CategoryItem {
  name: string;
  icon: React.ElementType;
  key: string;
  image?: string;
}

const categoryItems: CategoryItem[] = [
  {
    name: '10 полезных свойств сока из кислой вишни для похудения и здоровья сердца',
    icon: FaAppleAlt,
    key: 'tart_cherry_juice',
    image: 'https://i.imgur.com/lX9zQSC.png',
  },
  {
    name: 'От прокрастинации к прогрессу: как оставаться продуктивным на работе',
    icon: FaAppleAlt,
    key: 'procrastination',
    image: 'https://i.imgur.com/6f31ZLO.png',
  },
  {
    name: 'Вкусный и полезный: куриный паштет от Ларисы в вашем рационе',
    icon: FaAppleAlt,
    key: 'paste',
    image: 'https://i.imgur.com/2p3NDcv.png',
  },
  {
    name: 'Так ли полезны яблоки?',
    icon: FaAppleAlt,
    key: 'fruits',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Топ-10 овощей для похудения',
    icon: FaCarrot,
    key: 'vegetables',
    image: 'https://i.imgur.com/nrvaVRd.png',
  },
  {
    name: 'Почему рыба так полезна?',
    icon: FaFish,
    key: 'seafood',
    image: 'https://i.imgur.com/97sW3rJ.jpeg',
  },
  {
    name: 'Зелень: источник витаминов',
    icon: FaLeaf,
    key: 'herbs',
    image: 'https://images.unsplash.com/photo-1617368350922-3eb1a7e5a078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Семена: маленькие, но мощные',
    icon: FaSeedling,
    key: 'seeds',
    image: 'https://images.unsplash.com/photo-1571463672894-2432d87d654d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Смузи: полезные и вкусные',
    icon: FaBlender,
    key: 'smoothies',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1eb8ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Польза куриного мяса',
    icon: FaDrumstickBite,
    key: 'poultry',
    image: 'https://images.unsplash.com/photo-1609770230977-12977fae5189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Яйца: идеальный завтрак',
    icon: FaEgg,
    key: 'eggs',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    name: 'Цельнозерновой хлеб: польза для здоровья',
    icon: FaBreadSlice,
    key: 'bread',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
];

export default categoryItems;
