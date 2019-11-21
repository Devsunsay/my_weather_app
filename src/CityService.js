import Axios from "axios";
import {citiesApiUrl} from "./constants";

export const getCities = () => {
    return Axios.get(citiesApiUrl + process.env.REACT_APP_WEATHER_API_KEY);
}



