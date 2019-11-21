import React, {Component} from "react";
import {getCities} from "./CityService";
import CityList from "./CityList";
import CitySearch2 from "./CitySearch";

class Cities extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         citySearch: [],
    //         search: ""
    //     };
    //     //On ne met pas cities dans le state pour ne pas faire un appel API à chaque recherche et avoir une copie de la liste entière toujours disponible.
    //     this.cities = [];
    // }
    //
    // componentDidMount = () => {
    //     getCities().then(cities => {
    //         this.cities = cities;
    //         this.setState({
    //             citySearch: cities
    //         });
    //     });
    // };
    //
    // search = e => {
    //     const search = e.target.value;
    //     let citySearch = this.cities;
    //
    //     if (search !== "") {
    //         citySearch = this.cities.filter(city => city.name.includes(search));
    //     }
    //
    //     this.setState({
    //         citySearch: citySearch,
    //         search: search
    //     });
    // };

    render = () => {
        return (
            <div className="main-content cities">
                {/*<CitySearch handleChange={this.search} searchTerm={this.state.search}/>*/}
                <CitySearch2 />

                {/*<div className="row">*/}
                {/*    <CityList cities={this.state.citySearch}/>*/}
                {/*    <CityList />*/}
                {/*</div>*/}
            </div>
        );
    };
}

export default Cities;