import React, {Component} from "react";
import CitySearch from "../CitySearch";
import Weather from "./Weather";
import {getWeather} from "../../WeatherService";

class WeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            chosenCity: "",
            icon: null,
            temperature: null
        }
    }

    updateChosenCity = async suggestion => {
        // this.setState({
        //     chosenCity: suggestion.name,
        // });
        console.log('suggestion.name dans updateChosenCity', suggestion.name);
        this.getWeatherData(suggestion.name)
        return suggestion.name;
    };

    getWeatherData = async (chosenCity) => {
        console.log('entry in getWeatherData');

        const response = await getWeather(chosenCity);
        console.log('response in getWeatherData', response);

        this.setState({
            loading: false,
            icon: response.data.list[0].icon,
            temperature: response.data.list[0].main.temp
        });
    };
    //
    // componentDidUpdate = async () => {
    //     this.getWeatherData();
    // };

    render = () => {

        return (
            <div className="main-content home">
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