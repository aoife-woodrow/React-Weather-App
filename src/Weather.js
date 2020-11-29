import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
    setWeatherData({
        ready: true,
        date: "Sunday 11:11",
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        city: response.data.name,
        img: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
    });
    }

    if(weatherData.ready){
    return (
        <div className="Weather">
            <form>
                 <div class="row">
                        <div class="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                        </div>
                        <div class="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
        <div className="row mt-3">
            <div className="col-6">
                <img src={weatherData.img}
                alt={weatherData.description}
                class="float-left" />
                <span className="currentTemp">{Math.round(weatherData.temp)}</span>
                <span className="unit">°C</span>
            </div>
             <div className="col-6">
                <ul>
                     <li>Humidity: {weatherData.humidity}%</li>
                     <li>Wind: {weatherData.wind} mph</li>
                </ul>
            </div>
        </div>
        </div>
    );
    }
    else {
        const apiKey = "b753aa62423f8caa495cede8803bb20c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}