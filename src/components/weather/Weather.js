import React from "react";
import {CubeGrid} from "better-react-spinkit";
import WeatherCard from "./WeatherCard";

const Weather = ({loading, chosenCity, temperature, icon}) => {
    if (loading) {
        return (
            <div id="autosuggest-composant" className="main-content weather">
                <CubeGrid size={50} color="white"/>
            </div>
        );
    }

    return (
        <div id="autosuggest-composant" className="main-content weather">
            <WeatherCard chosenCity={chosenCity} temperature={temperature} icon={icon}/>
        </div>
    );
};

export default Weather;
