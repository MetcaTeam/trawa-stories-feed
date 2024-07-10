import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/StoriesSection.css";
import { supabase } from '../connection/supabaseClient';

interface CustomStory {
  type: string;
  image?: string;
  caption?: string;
  captionColor?: string;
  title?: string;
  bgColor?: string;
  text?: string;
}

interface Story {
  content: (props: any) => JSX.Element;
}

const StoriesSection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [storiesData, setStoriesData] = useState<CustomStory[]>([]);
  const { categoryName } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();

  console.log("categoryName:", categoryName);

  useEffect(() => {
    const fetchCategoryAndStories = async () => {
      setLoading(true);
      try {
        const { data: categoryData, error: categoryError } = await supabase
          .from("categories")
          .select("id")
          .eq("key", categoryName)
          .single();

        if (categoryError || !categoryData) {
          console.error("Error fetching category ID:", categoryError?.message || "Category not found");
          setLoading(false);
          return;
        }

        const categoryId = categoryData.id;

        const { data: storiesData, error: storiesError } = await supabase
          .from("stories")
          .select("*")
          .eq("category_id", categoryId)
          .order("sequence", { ascending: true });

        console.log("storiesData:", storiesData);

        if (storiesError) {
          console.error("Error fetching stories:", storiesError.message);
        } else {
          setStoriesData(storiesData || []);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryAndStories();
  }, [categoryName]);

  const redirectToHome = () => {
    navigate("/");
  };

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <svg className="loader animate-spin"></svg>
      </div>
    );
  };

  const getStoriesObject = (): Story[] => {
    if (!categoryName || storiesData.length === 0) {
      console.error("Invalid categoryName or missing data for category:", categoryName);
      return [];
    }

    const stories = storiesData.map((item, index) => {
      if (item.type === "imageCaptionPost") {
        return {
          content: (props: any) => (
            <div className="story-container w-screen h-screen flex items-center justify-center relative">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="gradient-overlay"></div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white caption"
                style={{ color: item.captionColor }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span>{item.caption}</span>
              </motion.div>
            </div>
          ),
        };
      } else if (item.type === "titleImageTextPost") {
        return {
          content: (props: any) => (
            <div
              className="story-container h-screen w-screen bg-center bg-no-repeat bg-cover text-white font-bold flex flex-col justify-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="max-w-screen-md flex flex-col items-center justify-center mx-auto">
                <div className="w-full h-full flex justify-center items-center mb-4">
                  <div style={{ display: loading ? "block" : "none" }}>
                    {renderLoading()}
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    {/* <img
                      src={item.image}
                      alt="stories"
                      className="w-full h-full flex object-cover"
                      onLoad={() => setLoading(false)}
                      /> */}
                  </div>
                    <div className="gradient-overlay"></div>
                </div>
                      <div className="absolute top-0 left-0 right-0 p-4 text-3xl font-bold text-white title">
                        <span>{item.title}</span>
                      </div>
                <motion.div
                  className="caption text-lg text-left max-w-screen-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <span className="whitespace-pre-wrap font-semibold">{item.text}</span>
                </motion.div>
              </div>
            </div>
          ),
        };
      } else {
        console.warn("Unexpected story type at index", index, ":", item);
        return null;
      }
    }).filter((story): story is Story => story !== null);

    console.log("Processed stories:", stories);
    return stories;
  };

  return (
    <div className="stories-container w-screen h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {loading ? (
          renderLoading()
        ) : (
          <Stories
            stories={getStoriesObject()}
            defaultInterval={10000}
            width={"100%"}
            height="100vh"
            onAllStoriesEnd={redirectToHome}
            onStoryEnd={() => setLoading(false)}
          />
        )}
      </motion.div>
    </div>
  );
};

export default StoriesSection;
