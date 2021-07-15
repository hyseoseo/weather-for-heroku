import React from "react";
import WeatherStyled from "./Weather.styles";

const Weather = (props) => {
  const { position, weather } = props;
  const min = Math.round(weather.dailyMin);
  const max = Math.round(weather.dailyMax);

  if (position.latitude === undefined || position.longitude === undefined) {
    return null;
  }

  return (
    <WeatherStyled>
      오늘의 체감 기온은 {min}도에서 {max}도 사이입니다.
    </WeatherStyled>
  );
};

export default Weather;
