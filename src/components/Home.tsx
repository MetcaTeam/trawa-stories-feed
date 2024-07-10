import React, { useEffect, useMemo, useState } from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import CreditsComponent from './CreditsComponent';
import { useNavigate } from 'react-router-dom';
import { getCurrentMonthAndYear } from '../utils/dateUtils';
import { supabase } from '../connection/supabaseClient';

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
    const navigate = useNavigate();
    const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await supabase
                .from('categories').select('*');
            if (error) {
                console.error('Error fetching category items:', error.message);
            } else {
                setCategoryItems(data || []);
            }
        };
        fetchCategories();
    }, []);

    const handleImageError = (key: string) => {
        setImageLoadErrors((prevErrors) => ({
            ...prevErrors,
            [key]: true,
        }));
    };

    const redirectToStory = (categoryItem: CategoryItem) => {
        navigate(`/story/${categoryItem.key}`);
    };

    const currentMonthAndYear = useMemo(() => getCurrentMonthAndYear(), []);

    const renderCategoryItem = () => {
        return categoryItems.map((categoryItem) => {
            const isError = imageLoadErrors[categoryItem.key];

            return (
                <div
                    className="flex flex-col md:flex-row justify-start items-start mb-6 cursor-pointer bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    key={categoryItem.name}
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
                            <div className='flex justify-between'>
                                <div className="text-sm text-gray-400 mt-2">Trawa | {currentMonthAndYear}</div>
                                <div className="flex justify-end mt-2">
                                    <FaHeart className="text-gray-400 hover:text-red-500 mr-4 cursor-pointer" />
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
                <div
                    className="cursor-pointer"
                    onClick={() => setCreditsPopUpOpen(true)}
                >
                    {/* <i className="material-icons text-4xl">info</i> */}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-screen-md p-4">
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
