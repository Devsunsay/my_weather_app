import React, {Component} from "react";
import CitySearch from "./CitySearch";
import Weather from "./Weather";
import {getCities} from "./CityService";

class WeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            citySearch: [],
            search: "",
            weather: null
        }
        this.chosenCity = null;
    }

    componentDidMount = async () => {
        getCities().then(chosenCity => {
            this.chosenCity = chosenCity;
            this.setState({
                citySearch: chosenCity
            });
        });
    };

    search = e => {
        const search = e.target.value;
        let citySearch = this.chosenCity;

        if (search !== "") {
            citySearch = this.chosenCity.filter(user => user.name.includes(search));
        }

        this.setState({
            citySearch: citySearch,
            search: search
        });
    };

    render = () => {
        return(
            <>
                <CitySearch handleChange={this.search} searchTerm={this.state.search}/>
                <Weather chosenCity={this.state.citySearch}/>
            </>
        );
    }
}

export default WeatherPage;