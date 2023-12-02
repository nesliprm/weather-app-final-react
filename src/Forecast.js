import React from "react";
import axios from "axios";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast(props) {
  let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
  let lat = props.lat;
  let lon = props.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showForecast);

  function showForecast(response) {
    console.log(response);
  }

  return (
    <div className="Forecast mt-3">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sun</div>

          <Icon value="13n" size={52} />

          <div className="Forecast-temp">
            <span className="Forecast-temp-high">2°</span>{" "}
            <span className="Forecast-temp-low">-5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
