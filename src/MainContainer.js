import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import Weather from "./Weather";

const MainContainer = (props) => {
  const [position, setPosition] = useState({});
  const [weather, setWeather] = useState({});
  const [imageUrls, setImageUrls] = useState([]);

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
    } else {
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
        const dailyMax = result.data.daily[0].feels_like.day - 273.15;
        const dailyMin = result.data.daily[0].feels_like.night - 273.15;
        const currentTemp = result.data.daily[0].feels_like.morn - 273.15;
        const mainWeather = result.data.daily[0].weather[0].main;
        setWeather({
          dailyMax: dailyMax,
          dailyMin: dailyMin,
          currentTemp: currentTemp,
          mainWeather: mainWeather,
        });
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [position]);

  const fetchOutfitImage = async (keyword, item) => {
    try {
      const result = await axios.get(`/${keyword}`);
      const images = result.data.images;
      const urls = images.map((image) => image.url);
      console.log(urls);
      setImageUrls(urls);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  /*
  const fetchOutfitImage = async (item) => {
    try {
      const keyword = `site:pinterest.com street+${weatherToOutfit(
        weather.dailyMin,
        weather.dailyMax
      )}+${item}+outfit`;
      console.log(keyword);
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
      return result;
    } catch (error) {
      console.log(error);
    }
  };
*/
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
        <div className="outfit-container">
          {imageUrls.length ? <ImageCard images={imageUrls} /> : null}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
