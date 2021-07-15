import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import ImageCard from "./ImageCard";

const MainContainer = (props) => {
  const [position, setPosition] = useState({});
  const [weather, setWeather] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [styles, setStyles] = useState([]);

  const weatherToOutfit = (min, max) => {
    let outfitKeyword;
    if (min <= 0) {
      outfitKeyword = "down coat";
    } else if (min <= 4) {
      outfitKeyword = "winter";
    } else if (min <= 8) {
      outfitKeyword = "early+winter";
    } else if (min <= 11) {
      outfitKeyword = "early+spring";
    } else if (min <= 16) {
      outfitKeyword = "spring";
    } else if (min <= 19) {
      outfitKeyword = "late+spring";
    } else if (min >= 20 && min <= 22 && max <= 27) {
      outfitKeyword = "early+summer";
    } else if (min > 22 && max > 27) {
      outfitKeyword = "summer";
    }
    return outfitKeyword;
  };

  useEffect(() => {
    const fetchPosition = () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      const success = (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      };
      const error = (error) => {
        console.log(`error: ${error.code}`);
      };
      window.navigator.geolocation.getCurrentPosition(success, error, options);
    };
    fetchPosition();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=minutely,hourly&appid=f9ac4cf0f4dda05daef87a55d41c8c45`,
          {}
        );
        const dailyMax = result.data.daily[0].temp.max - 273.15;
        const dailyMin = result.data.daily[0].feels_like.night - 273.15;
        const currentTemp = result.data.current.feels_like - 273.15;
        const mainWeather = result.data.daily[0].weather[0].main;
        setWeather({
          dailyMax: dailyMax,
          dailyMin: dailyMin,
          currentTemp: currentTemp,
          mainWeather: mainWeather,
          keyword: weatherToOutfit(dailyMin, dailyMax),
        });
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [position]);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const result = await axios.get(
          `https://hseo-weather.herokuapp.com/styles`
        );
        setStyles(result.data);
        console.log(styles);
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    fetchStyles();
  }, []);

  const fetchOutfitImage = async (look) => {
    try {
      const keyword = `site:pinterest.com ${weather.keyword}+${look}+outfit`;
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

  return (
    <div>
      <div className="main-container">
        <div className="weather-container">
          {position.latitude === undefined ||
          position.longitude === undefined ? null : (
            <Weather
              dailyMax={Math.floor(weather.dailyMax)}
              dailyMin={Math.floor(weather.dailyMin)}
              currentTemp={Math.floor(weather.currentTemp)}
              mainWeather={weather.mainWeather}
              keyword={weatherToOutfit(weather.dailyMin, weather.dailyMax)}
              fetchOutfitImage={fetchOutfitImage}
            />
          )}
        </div>
        <div className="style-container">
          오늘 당신의 스타일은?
          <div className="style-keywords">
            {styles.map((style) => {
              return (
                <button
                  className="outfit-keyword-button"
                  onClick={() => fetchOutfitImage(style.value)}
                >
                  {`#${style.show}`}
                </button>
              );
            })}
          </div>
        </div>
        <ImageCard images={imageUrls} />
      </div>
    </div>
  );
};

export default MainContainer;
