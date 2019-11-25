import React, {Component} from "react";
import CitySearch from "../CitySearch";
import Weather from "./Weather";
import {getWeather} from "../../WeatherService";
import {getWeatherForecast} from "../../WeatherService";


class WeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            chosenCity: "",
            icon: null,
            temperature: null
        };
    }

    componentDidUpdate = async () => {
        this.forecastButton = document.getElementById('weather-forecast-button');

        if(this.forecastButton) {
            const response = await getWeatherForecast(this.state.chosenCity);
            console.log('appel api forecast in componentDidUpdate', response);

            this.forecastButton.addEventListener( "click", async () => {

                return response.list;
            });
        }


    }

    updateChosenCity = suggestion => {
        this.setState({
            chosenCity: suggestion.name
        });

        this.getWeatherData(suggestion.name);
        return suggestion.name;
    };

    getWeatherData = async (chosenCity) => {
        const response = await getWeather(chosenCity);
        console.log('response', response);

        this.setState({
            loading: false,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp
        });
    };

    render = () => {
        return (
            <div className="main-content weather">
                <CitySearch getSuggestionHandler={this.updateChosenCity}/>
                <Weather
                    loading={this.state.loading}
                    chosenCity={this.state.chosenCity}
                    icon={this.state.icon}
                    temperature={this.state.temperature}
                />
            </div>
        );
    }
}

export default WeatherPage;