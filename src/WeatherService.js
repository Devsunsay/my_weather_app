import Axios from "axios";
import {weatherApiUrl} from "./constants";

export function getWeather(cityName) {
    return Axios.get(`${weatherApiUrl}${process.env.REACT_APP_WEATHER_API_KEY}&weather?q=${cityName}`);
}

