import Axios from "axios";
import {weatherApiUrl} from "./constants";

export function getWeather(cityName) {
    return Axios.get(`${weatherApiUrl}weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
}

export function getWeatherForecast(cityName) {
    const $currentWeatherCard = document.getElementById('current_weather_card');
    const $forecastWeatherCard = document.getElementById('forecast_weather_card');

    if($currentWeatherCard) {
        $currentWeatherCard.style.display = "none";
        console.log('$currentWeatherCard défini');

    }

    if($forecastWeatherCard) {
        $forecastWeatherCard.style.display = "flex";
        console.log('$forecastWeatherCard défini');
    }

    const response = Axios.get(`${weatherApiUrl}forecast?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

    console.log('appel api forecast', response);

    return response;
}


