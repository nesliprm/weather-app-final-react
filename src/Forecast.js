import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDaily from "./ForecastDaily";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast mt-3">
        <div className="row">
          <div className="col">
            <ForecastDaily value={forecast[0]} />
          </div>
          <div className="col">
            <ForecastDaily value={forecast[1]} />
          </div>
          <div className="col">
            <ForecastDaily value={forecast[2]} />
          </div>
          <div className="col">
            <ForecastDaily value={forecast[3]} />
          </div>
          <div className="col">
            <ForecastDaily value={forecast[4]} />
          </div>
          <div className="col">
            <ForecastDaily value={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let lat = props.lat;
    let lon = props.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showForecast);

    return (
      <div className="mt-3 light-text">
        <small>Fetching forecast...</small>
      </div>
    );
  }
}
