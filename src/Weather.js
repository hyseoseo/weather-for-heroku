import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  const {
    dailyMax,
    dailyMin,
    currentTemp,
    mainWeather,
    items,
    fetchOutfitImage,
  } = props;

  return (
    <>
      <div className="weather-description">
        오늘의 체감 기온은 {dailyMin}도에서 {dailyMax}도 사이입니다.
      </div>
      <div className="weather-keywords">
        {items.map((item) => {
          return (
            <button
              className="outfit-keyword-button"
              onClick={() => fetchOutfitImage(item.keyword)}
            >{`#${item.show}`}</button>
          );
        })}
      </div>
    </>
  );
};

export default Weather;
