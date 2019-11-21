import React from "react";
import {CubeGrid} from "better-react-spinkit";
import {getWeather} from "./WeatherService";

var Weather = async (props) => {
    this.weather = await getWeather(this.props.chosenCity);

    if (this.weather) {
        return (
            <div className="main-content weather">
                {this.weather}
            </div>
        );
    } else {
        return (
            <div className="main-content weather">
                <CubeGrid size={50} color="white"/>
            </div>
        );
    }
}

export default Weather;