import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                 <div class="row">
                        <div class="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autocomplete="off"/>
                        </div>
                        <div class="col-3">
                            <input type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                </div>
            </form>
            <h1>London</h1>
            <ul>
                <li>Sunday 10:00</li>
                <li>Mostly Cloudy</li>
            </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
                alt="Mostly Cloudy" 
                class="float-left" />
                6°C
            </div>
             <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                     <li>Humidity: 72%</li>
                     <li>Wind: 5 mph</li>
                </ul>
            </div>
        </div>

        </div>
    )
}