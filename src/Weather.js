import React from "react";

const Weather = (props) => {
  const { dailyMax, dailyMin } = props;

  return (
    <div className="weather-description">
      오늘의 체감 기온은 {dailyMin}도에서 {dailyMax}도 사이입니다.
    </div>
  );
};

export default Weather;
