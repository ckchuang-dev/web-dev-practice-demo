import axios from 'axios';

const API_KEY = '7cd21bf40cab9374ced268de67672537';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tw`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}