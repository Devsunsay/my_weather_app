import React, {Component} from "react";
import CitySearch from "../CitySearch";
import Weather from "./Weather";
import {getWeather} from "../../WeatherService";
import {getWeatherForecast} from "../../WeatherService";
import {getIteratorWithStep} from "../../Utils";

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
            this.forecastButton.addEventListener( "click", async () => {

                const response = await getWeatherForecast(this.state.chosenCity);
                console.log('appel api forecast in componentDidUpdate', response);

                const $currentWeatherCard = document.getElementById('current_weather_card');
                const $forecastWeatherCard = document.getElementById('forecast_weather_card');

                if($currentWeatherCard) {
                    $currentWeatherCard.style.display = "none";
                    console.log('$currentWeatherCard défini');
                }

                if($forecastWeatherCard) {
                    $forecastWeatherCard.style.display = "flex";
                    console.log('$forecastWeatherCard défini');
                }

                //filter
                const getIteratorWithStep = getIteratorWithStep(7,40,7);
                getIteratorWithStep.map(value => {
                    console.log(response.list[value]);
                    return response.list[value];
                })
            });
        }
    };

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