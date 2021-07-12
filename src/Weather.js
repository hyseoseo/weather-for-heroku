import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  const {
    dailyMax,
    dailyMin,
    currentTemp,
    mainWeather,
    keyword,
    fetchOutfitImage,
  } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchOutfitItems = async () => {
      try {
        console.log(keyword);
        const result = await axios.get(`/${keyword}`);
        //const result = await axios.get(`http://localhost:5000/${keyword}`);

        setItems(result.data.items);
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    fetchOutfitItems();
  }, []);

  return (
    <>
      <div className="weather-description">
        오늘의 체감 기온은 {dailyMin}도에서 {dailyMax}도 사이입니다.
      </div>
      <div className="weather-keywords">
        {keyword === undefined
          ? null
          : items.map((item) => {
              return (
                <button
                  className="outfit-keyword-button"
                  onClick={() => fetchOutfitImage(keyword, item.keyword)}
                >{`#${item.show}`}</button>
              );
            })}
      </div>
    </>
  );
};

export default Weather;
