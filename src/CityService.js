import Axios from "axios";
import {citiesApiUrl} from "./constants";

// export const getCities = async () => {
//     let response = await Axios.get(citiesApiUrl + process.env.REACT_APP_WEATHER_API_KEY);
//     return response.data;
// }

export const getCities = () => {
    return Axios.get(citiesApiUrl + process.env.REACT_APP_WEATHER_API_KEY);
}


