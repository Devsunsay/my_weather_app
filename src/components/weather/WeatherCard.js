import React from "react";

const WeatherCard = ({chosenCity, temperature, icon}) => {
    return (
        <div className="weather_card card shadow">
            <p className="city_view card-header">{chosenCity}</p>
            <div className="card-body">
                <p className="icon_view">{icon}</p>
                <p className="temperature_view">{temperature}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
