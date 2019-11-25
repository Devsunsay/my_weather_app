import React, {Component} from "react";
//https://github.com/moroshko/react-autosuggest#installation
import Autosuggest from 'react-autosuggest';
import {getGeoDBCities} from "../CityService";

class CitySearch extends Component {
    constructor(props) {
        super(props);

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: [],
        };
        this.cities = [];
    }

    componentDidMount = async () => {
        // const response = await getOpenWeatherMapCities();
        const response = await getGeoDBCities();
        console.log('response', response);

        // this.cities = response.data.list.map((city) => {
        //     return {
        //         name: city.name
        //     }
        // });
        this.setState({
            cities: response.data.map((city) => {
                return {
                    name: city.nom
                }
            })
        });
    };

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });

        this.$autosuggestComposant = document.getElementById('autosuggest-composant');
        this.$autosuggestComposant.style.display = 'flex';
    };

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.cities.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    // const getSuggestionValue = suggestion => suggestion.name;

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({value}) => {
        if (value.length >= 2) {
            this.setState({
                suggestions: this.getSuggestions(value)
            });
        }
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {value, suggestions} = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Chercher une ville',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.props.getSuggestionHandler}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default CitySearch;