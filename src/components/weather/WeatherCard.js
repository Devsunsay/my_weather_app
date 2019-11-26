import React from "react";

const WeatherCard = ({chosenCity, temperature, icon}) => {

    let getFiveNextDaysDates = () => {
        // let today = new Date();
        // console.log('today', today)
        const today = new Date();
        var fiveNextDaysDate = [];

        for (let i = 1; i <= 5; i++) {
            let tomorrow = new Date(today);

            console.log('tomorrow début i', tomorrow);
            // let tomorrow = today.getDate() + i
            tomorrow.setDate(tomorrow.getDate() + i);
            console.log('tomorrow milieu i', tomorrow);

            var dd = String(tomorrow.getDate()).padStart(2, '0');
            var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = tomorrow.getFullYear();

            tomorrow = dd + '/' + mm + '/' + yyyy;
            console.log('tomorrow fin i', tomorrow);

            fiveNextDaysDate.push(tomorrow);
        }
        return fiveNextDaysDate;
    }

    const datesArray = getFiveNextDaysDates();

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
                                    datesArray[0]
                                }
                            </th>
                            <th scope="col">
                                {
                                    datesArray[1]
                                }
                            </th>
                            <th scope="col">
                                {
                                    datesArray[2]
                                }
                            </th>
                            <th scope="col">
                                {
                                    datesArray[3]
                                }
                            </th>
                            <th scope="col">
                                {
                                    datesArray[4]
                                }
                            </th>
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
