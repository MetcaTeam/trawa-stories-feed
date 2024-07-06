import React, { useState } from 'react';
import categoryItems, { CategoryItem } from '../dataSource/categories';
import CreditsComponent from './CreditsComponent';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const redirectToStory = (categoryItem: CategoryItem) => {
    navigate(`/story/${categoryItem.key}`);
  };

  const renderCategoryItem = () => {
    return categoryItems.map((categoryItem) => (
      <div
        className="flex justify-center items-center flex-col mt-4 cursor-pointer"
        key={categoryItem.name}
        onClick={() => redirectToStory(categoryItem)}
      >
        <div className="category-outer-circle flex justify-center items-center bg-gray-700 rounded-full p-2">
          <div className="category-inner-circle flex justify-center items-center bg-gray-900 rounded-full p-4">
            <categoryItem.icon className="text-4xl text-white" />
          </div>
        </div>
        <div className="font-bold text-white mt-2">{categoryItem.name}</div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="header flex justify-between items-center p-4 text-3xl font-bold bg-gray-800">
        <div>Trawa</div>
        <div
          className="cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
          {/* <i className="material-icons text-4xl">info</i> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 p-4 max-w-screen-md">
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
