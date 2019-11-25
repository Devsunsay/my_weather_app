import Axios from "axios";
import {openWeatherMapCitiesApiUrl, geoGouvCitiesApiUrl, geoDBCitiesApiUrl} from "./constants";

export const getOpenWeatherMapCities = () => {
    return Axios.get(openWeatherMapCitiesApiUrl + process.env.REACT_APP_WEATHER_API_KEY);
};

export const getGeoGouvCities = () => {
    return Axios.get(geoGouvCitiesApiUrl);
};

export const getGeoDBCities = () => {
    return Axios.get(geoGouvCitiesApiUrl);
};