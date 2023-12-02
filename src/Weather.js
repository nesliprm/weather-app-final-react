import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import WeatherContent from "./WeatherContent";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.default);
  let [weatherdata, setWeatherdata] = useState({ ready: false });

  function showWeather(response) {
    console.log(response);
    setWeatherdata({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      desc: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <div className="container outer-edge">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Please type a location..."
              autoFocus="on"
              autoComplete="off"
              onChange={updateCity}
            />

            <button type="submit" className="btn btn-dark mb-2">
              Search
            </button>
          </form>
          <WeatherContent value={weatherdata} />
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return <div className="text-center pt-5">Fetching data...</div>;
  }
}
