import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  const { dailyMax, dailyMin, currentTemp } = props;

  return (
    <div className="weather-description">
      기온은 {dailyMin}도에서 {dailyMax}도 사이입니다. 현재 체감 기온은{" "}
      {currentTemp}도입니다.
    </div>
  );
};

export default Weather;
