import React from "react";
import {getWeatherForecast} from "../../WeatherService";

const WeatherCard = ({chosenCity, temperature, icon}) => {
    // let currentDate = new Date("d m Y");
    var today = new Date();
    const tomorrow = new Date(today)

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    // tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        <>
            <div id="current_weather_card" className="card shadow">
                <p className="city_view card-header">{chosenCity}</p>
                <div className="card-body">
                    <img id={icon} className="icon_view" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                    <p className="temperature_view">{temperature}°C</p>
                    <button id="weather-forecast-button" className="btn btn-info">Voir prévisions</button>
                </div>
            </div>

            <div id="forecast_weather_card" className="card shadow">
                <p className="city_view card-header">{chosenCity}</p>
                <div className="card-body">
                    <table className="table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">
                                {
                                // currentDate.setDate(currentDate.getDate() + 1);
                                    today
                                }
                            </th>
                            <th scope="col">{}</th>
                            <th scope="col">{Date.now() + 3}</th>
                            <th scope="col">{Date.now() + 4}</th>
                            <th scope="col">{Date.now() + 5}</th>
                        </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <th scope="col">
                                    <img id={icon} className="icon_view"
                                         src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">
                                    <p className="temperature_view">{temperature}°C</p>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default WeatherCard;
