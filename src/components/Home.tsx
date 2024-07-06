import React, { useState } from 'react';
import categoryItems, { CategoryItem } from '../dataSource/categories';
import CreditsComponent from './CreditsComponent';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const navigate = useNavigate();
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (key: string) => {
    setImageLoadErrors((prevErrors) => ({
      ...prevErrors,
      [key]: true,
    }));
  };

  const redirectToStory = (categoryItem: CategoryItem) => {
    navigate(`/story/${categoryItem.key}`);
  };

  const renderCategoryItem = () => {
    return categoryItems.map((categoryItem) => {
      const isError = imageLoadErrors[categoryItem.key];

      return (
        <div
          className="flex justify-start items-center mb-4 cursor-pointer bg-gray-800 p-4 rounded-lg"
          key={categoryItem.name}
          onClick={() => redirectToStory(categoryItem)}
        >
          {!isError && categoryItem.image ? (
            <img
              src={categoryItem.image}
              alt={categoryItem.name}
              className="w-16 h-16 object-cover rounded-full"
              onError={() => handleImageError(categoryItem.key)}
            />
          ) : (
            <div className="w-16 h-16 flex-shrink-0 flex justify-center items-center bg-gray-700 rounded-full p-2">
              <categoryItem.icon className="text-4xl text-white" />
            </div>
          )}
          <div className="ml-4">
            <div className="text-xl font-bold text-white">{categoryItem.name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="header flex justify-between items-center p-4 text-3xl font-bold bg-gray-800">
        <div>Trawa</div>
        <div
          className="cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
          <i className="material-icons text-4xl">info</i>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-md p-4 overflow-y-auto">
          {renderCategoryItem()}
        </div>
      </div>
      {isCreditsPopUpOpen && (
        <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />
      )}
    </div>
  );
};

export default Home;
