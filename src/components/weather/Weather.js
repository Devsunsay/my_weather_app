import React from "react";
import {CubeGrid} from "better-react-spinkit";
import WeatherCard from "./WeatherCard";

const Weather = ({loading, chosenCity, temperature}) => {
    if (loading) {
        return (
            <div className="main-content weather">
                <CubeGrid size={50} color="white"/>
            </div>
        );
    }

    return (
        <div className="main-content weather">
            <WeatherCard chosenCity={chosenCity} temperature={temperature}/>
        </div>
    );
};

export default Weather;
