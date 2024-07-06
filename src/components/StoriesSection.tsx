import React, { useState } from "react";
import Stories from "react-insta-stories";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StoriesData from "../dataSource/storiesData";
import "../styles/StoriesSection.css";

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
  const { categoryName } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center">
        <svg className="loader animate-spin"></svg>
      </div>
    );
  };

  const getStoriesObject = (): Story[] => {
    if (!categoryName || !StoriesData[categoryName]) {
      console.error("Invalid categoryName or missing data for category:", categoryName);
      return [];
    }

    const stories = (StoriesData[categoryName] as CustomStory[])
      .map((item, index) => {
        if (item.type === "imageCaptionPost") {
          return {
            content: (props: any) => (
              <div className="story-container bg-black w-screen h-screen flex items-start justify-center">
                <div
                  className="w-full h-full bg-black max-w-screen-md flex items-center justify-center flex-col bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div
                    className="mt-12 caption text-5xl font-bold"
                    style={{ color: item.captionColor }}
                  >
                    <span>{item.caption}</span>
                  </div>
                </div>
              </div>
            ),
          };
        } else if (item.type === "titleImageTextPost") {
          return {
            content: (props: any) => (
              <div
                className="story-container h-screen w-screen bg-center bg-no-repeat bg-black text-white font-bold flex items-start justify-center"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="max-w-screen-md flex items-center justify-center flex-col">
                  <div className="mt-10 text-x">
                    <span>{item.title}</span>
                  </div>
                  <div className="flex flex justify-center items-center mt-2 text-story-image-container">
                    <div style={{ display: loading ? "block" : "none" }}>
                      {renderLoading()}
                    </div>
                    <div style={{ display: loading ? "none" : "block" }}>
                      <img
                        src={item.image}
                        alt="stories"
                        className="h-6/12"
                        onLoad={() => setLoading(false)}
                      />
                    </div>
                  </div>
                  <div className="mt-6 caption text-lg text-left mx-3 max-w-screen-md">
                    <span className="whitespace-pre-wrap">{item.text}</span>
                  </div>
                </div>
              </div>
            ),
          };
        } else {
          console.warn("Unexpected story type at index", index, ":", item);
          return null;
        }
      })
      .filter((story): story is Story => story !== null);

    console.log("Processed stories:", stories);
    return stories;
  };

  return (
    <div className="stories-container w-screen h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Stories
          stories={getStoriesObject()}
          defaultInterval={5000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={redirectToHome}
          onStoryEnd={() => setLoading(true)}
        />
      </motion.div>
    </div>
  );
};

export default StoriesSection;
