import React, { Component } from "react";

class Home extends Component{

    render = () => {
        console.log(process.env.REACT_APP_WEATHER_API_KEY);
        return (
            <div className="main-content home">
                <p className="welcoming-text">Welcome on our<br/>
                fantastic<br/>
                amazing<br/>
                incredible<br/>
                marvelous<br/>
                WeatherApp</p>
            </div>
        );
    }
}

export default Home;