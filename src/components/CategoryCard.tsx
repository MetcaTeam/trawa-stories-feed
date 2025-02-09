import React from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  key: string;
  image?: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  isLiked: boolean;
  count: number;
  onLike: (categoryId: string, e: React.MouseEvent) => void;
  onClick: () => void;
  onImageError: (key: string) => void;
  imageError: boolean;
  currentMonthAndYear: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isLiked,
  count,
  onLike,
  onClick,
  onImageError,
  imageError,
  currentMonthAndYear,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row justify-start items-start mb-6 cursor-pointer bg-gray-800 rounded-lg shadow-md overflow-hidden"
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-full md:w-48">
        {!imageError && category.image ? (
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            onError={() => onImageError(category.key)}
          />
        ) : (
          <div className="w-full h-48 md:h-full flex justify-center items-center bg-gray-700">
            <category.icon className="text-4xl text-white" />
          </div>
        )}
      </div>
      <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-left flex flex-col justify-between p-4 w-full">
        <div>
          <div className="text-xl font-regular text-white">{category.name}</div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-400 mt-2">
              Trawa | {currentMonthAndYear}
            </div>
            <div className="flex items-center mt-2">
              <FaHeart
                onClick={(e) => onLike(category.id, e)}
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
};

export default CategoryCard;
