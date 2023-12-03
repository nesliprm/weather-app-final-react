import React from "react";
import Icon from "./Icon";

export default function ForecastDaily(props) {
  function max() {
    let temp = Math.round(props.value.temp.max);
    return `${temp}°`;
  }

  function min() {
    let temp = Math.round(props.value.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.value.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>

      <Icon value={props.value.weather[0].icon} size={52} />

      <div className="Forecast-temp">
        <span className="Forecast-temp-high">{max()}</span>{" "}
        <span className="Forecast-temp-low">{min()}</span>
      </div>
    </div>
  );
}
