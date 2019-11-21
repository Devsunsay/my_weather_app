import React, {Component} from "react";
import {getWeather} from "./WeatherService";
import {CubeGrid} from "better-react-spinkit";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        //On ne met pas weather dans un state pour ne pas faire un appel API à chaque recherche et avoir une copie de la liste entière toujours disponible.
        this.weather = undefined;
    }

    componentDidMount = () => {
        getWeather().then(weather => {
            this.weather = weather;
            this.setState({
                loading: false
            });
        });
    };

    render = () => {
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
}

export default Weather;