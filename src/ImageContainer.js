import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";
import QueryString from "qs";

const ImageContainer = ({ match, location }) => {
  const style = match.params.style;
  const weather = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchOutfitImage = async () => {
      try {
        const searchKeyword = `site:pinterest.com street+${style}+${weather}+outfit`;
        const result = await axios.get(
          `https://www.googleapis.com/customsearch/v1`,
          {
            params: {
              key: "AIzaSyBV-qxsD9StF_eeaGhlb07e4VJl4KR_ujo",
              q: searchKeyword,
              searchType: "image",
              num: 10,
              cx: "ee4f8472c4cced0f0",
            },
          }
        );
        const images = [];
        for (let i = 0; i < 10; i++) {
          images.push(result.data.items[i].link);
        }
        setImageUrls(images);
        console.log(imageUrls);
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    fetchOutfitImage();
  }, []);
  /*
  const fetchOutfitImage = async (item) => {
    try {
      const keyword = `site:pinterest.com street+${keyword}+${item}+${style}+outfit`;
      const result = await axios.get(
        `https://www.googleapis.com/customsearch/v1`,
        {
          params: {
            key: "AIzaSyBV-qxsD9StF_eeaGhlb07e4VJl4KR_ujo",
            q: keyword,
            searchType: "image",
            num: 10,
            cx: "ee4f8472c4cced0f0",
          },
        }
      );
      const images = [];
      for (let i = 0; i < 10; i++) {
        images.push(result.data.items[i].link);
      }
      setImageUrls(images);
      console.log(imageUrls);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
*/

  return (
    <div className="outfit-container">
      {console.log(weather)}
      <ImageCard images={imageUrls} />
    </div>
  );
};

export default ImageContainer;
