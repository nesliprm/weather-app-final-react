import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Showdate from "./Showdate";
import WeatherContent from "./WeatherContent";

export default function Weather() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [weatherdata, setWeatherdata] = useState("");

  function showWeather(response) {
    setWeatherdata({
      name: response.data.name,
      date: `${new Date(response.data.dt * 1000)}`,
      country: response.data.sys.country,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      desc: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

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
      </div>
    </div>
  );
}
