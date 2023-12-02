import React from "react";
import axios from "axios";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let lat = "52.3676";
  let lon = "4.9041";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showForecast);

  function showForecast(response) {
    console.log(response);
  }

  return (
    <div className="Forecast mt-2">
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
