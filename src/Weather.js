import React from "react";
import {CubeGrid} from "better-react-spinkit";
import CitySearch from "./CitySearch";

var Weather = (props) => {

    if (this.weather) {
        return (
            <div className="main-content weather">
                {this.weather}
            </div>
        );
    } else {
        return (
            <div className="main-content weather">
                <CitySearch/>
                <CubeGrid size={50} color="white"/>
            </div>
        );
    }
}

export default Weather;