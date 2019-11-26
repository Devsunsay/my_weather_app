import Axios from "axios";
import {weatherApiUrl} from "./constants";

export function getWeather(cityName) {
    return Axios.get(`${weatherApiUrl}weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
}

export function getWeatherForecast(cityName) {

    const response = Axios.get(`${weatherApiUrl}forecast?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

    console.log('appel api forecast', response);

    return response;
}


