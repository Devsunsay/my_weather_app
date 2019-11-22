import Axios from "axios";
import {weatherApiUrl} from "./constants";

export function getWeather(cityName) {
    return Axios.get(`${weatherApiUrl}weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
}

