import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherdata, setWeatherdata] = useState("");

  function showWeather(response) {
    console.log(response.data);

    setWeatherdata({
      name: response.data.name,
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
        <div className="container inner-edge">
          <div className="row">
            <span className="col-sm">
              <div className="col-sm">
                <h1>{weatherdata.name}</h1>
                <div className="sub-text">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <small>{weatherdata.country}</small>
                </div>

                <small className="updateInfo">
                  Last updated: <span>Saturday 13:53</span>
                </small>

                <div>
                  <img
                    src={weatherdata.icon}
                    alt={weatherdata.desc}
                    className="iconStyle"
                  />
                </div>

                <div>
                  <small className="light-text">currently</small>
                </div>
                <div className="currentTemp">{weatherdata.temp}°C</div>
                <div>
                  <small className="high-low-text">H: </small>
                  <span className="light-text temperatures">
                    {weatherdata.high}
                  </span>
                  <small className="high-low-text"> L: </small>
                  <span className="light-text temperatures">
                    {weatherdata.low}
                  </span>
                </div>

                <br />

                <div className="light-text">
                  <a className="units" href="#">
                    °C
                  </a>{" "}
                  |{" "}
                  <a className="units" href="#">
                    °F
                  </a>
                </div>
                <br />
                <div>
                  <div className="info-text-1">{weatherdata.desc}</div>
                  <div className="info-text-2">
                    Feels like {weatherdata.feels}°C • Humidity{" "}
                    {weatherdata.humidity}% • Wind {weatherdata.wind} m/s
                  </div>
                </div>

                <br />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
