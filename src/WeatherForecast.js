import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForcast(props) {
    const[loaded, setLoaded] = useState(false);
    const[forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
       setForecast(response.data);
        setLoaded(true);
    }

    if(loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
              {forecast.list.slice(0, 6).map(function (forecastItem) {
                  return <WeatherForecastPreview data={forecastItem} />;
              })}
            </div>
        )
    } else {
     let apiKey = "b753aa62423f8caa495cede8803bb20c";
     let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleForecastResponse);

     return null;
    }
}