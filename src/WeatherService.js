import Axios from "axios";
import {weatherApiUrl} from "./constants";

export async function getWeather(cityName) {
    let response = await Axios.get(`${weatherApiUrl}${process.env.REACT_APP_WEATHER_API_KEY}&weather?q=${cityName}`);
    return response.data;
}
