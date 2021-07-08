//액션 타입
const GET_WEATHER = "GET_WEATHER";

//액션 생성 함수
export const getWeather = () => ({ type: GET_WEATHER });

//초기값
const initialState = {
  dailyMax: 20,
  dailyMin: 20,
  currentTemp: 20,
  mainWeather: "sunny",
};

//reducer
export default function weather(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {};
    default:
      return state;
  }
}
