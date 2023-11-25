import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [header, setHeader] = useState("Amsterdam");
  let [country, setCountry] = useState("NL");
  let [temp, setTemp] = useState("");
  let [highlow, setHighlow] = useState("");
  let [weatherinfo, setWeatherinfo] = useState("");

  function showWeather(response) {
    console.log(response.data);
    setHeader(city);
    setCountry(response.data.sys.country);
    setTemp(Math.round(response.data.main.temp));
    setHighlow(
      <div>
        <small className="high-low-text">H: </small>
        <span className="light-text temperatures">
          {Math.round(response.data.main.temp_max)}
        </span>
        <small className="high-low-text"> L: </small>
        <span className="light-text temperatures">
          {Math.round(response.data.main.temp_min)}
        </span>
      </div>
    );
    setWeatherinfo(
      <div>
        <div className="info-text-1">
          {response.data.weather[0].description}
        </div>
        <div className="info-text-2">
          Feels like {Math.round(response.data.main.feels_like)}°C • Humidity{" "}
          {Math.round(response.data.main.humidity)}% • Wind{" "}
          {Math.round(response.data.wind.speed)} m/s
        </div>
      </div>
    );
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
                <h1>{header}</h1>
                <div className="sub-text">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <small>{country}</small>
                </div>
                <br />

                <small className="updateInfo">
                  Last updated: <span>Saturday 13:53</span>
                </small>

                <br />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-and-meteorology-simplicon-set/102/mostly-sunny-cloudy-cloud-512.png"
                  alt="Few clouds icon"
                  className="iconStyle"
                />
                <br />
                <div>
                  <small className="light-text">currently</small>
                </div>
                <div className="currentTemp">{temp}°C</div>
                <div>{highlow}</div>

                <br />
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
                <div>{weatherinfo}</div>

                <br />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
