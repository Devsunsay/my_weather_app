import React, {Component} from "react";
import {getWeather} from "./WeatherService";
import {CubeGrid} from "better-react-spinkit";
import CitySearch from "./CitySearch";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        //On ne met pas weather dans un state pour ne pas faire un appel API à chaque recherche et avoir une copie de la liste entière toujours disponible.
        this.weather = null;
        this.cityName = null;
    }

    componentDidMount = async () => {
        this.cityName = new CitySearch().getSuggestionValue;
        this.weather = await getWeather(this.cityName);

        this.setState({
            loading: false
            choosenCity:
        });
    };

    render = () => {
        if (this.weather) {
            return (
                <div className="main-content weather">
                    <CitySearch/>
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
}

export default Weather;