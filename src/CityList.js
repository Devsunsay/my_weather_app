import React, {Component} from "react";

class CityList extends Component {
    render = () => {
        return (
            <div className="col-12">
                <div className="container">
                    <form>
                        <select name="cityName">
                            {
                                this.props.cities.map(city => <option>{city.name}</option>)
                            }
                        </select>
                    </form>
                </div>
            </div>
        )
    };
}

export default CityList;