import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Style from "./Style";
import Carousel from "./Carousel";

const MainContainer = (props) => {
  const [position, setPosition] = useState({});
  const [weather, setWeather] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [styles, setStyles] = useState([]);
  //const { styles } = props;

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

  //heroku json-server 이용시 로딩 시간이..?
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
    <div className="main-container">
      <Weather position={position} weather={weather} />
      <Style styles={styles} fetchOutfitImage={fetchOutfitImage} />
      <Carousel images={imageUrls} />
    </div>
  );
};

export default MainContainer;

MainContainer.defaultProps = {
  styles: [
    { id: 1, value: "minimal", show: "상수룩" },
    { id: 2, value: "rockchic", show: "환불룩" },
    { id: 3, value: "romantic", show: "로맨틱 성공적룩" },
    { id: 4, value: "cozy", show: "놀이터 노역룩" },
  ],
};
