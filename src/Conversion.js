import React, { useState } from "react";

export default function Conversion(props) {
  let [unit, setUnit] = useState("celsius");

  function toFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <div className="currentTemp">{props.value.temp}°C</div>
        <div>
          <small className="high-low-text">H: </small>
          <span className="light-text temperatures">{props.value.high}</span>
          <small className="high-low-text"> L: </small>
          <span className="light-text temperatures">{props.value.low}</span>
        </div>

        <br />

        <div className="light-text">
          <small className="units">
            <a href="/" onClick={toFah}>
              show weather in °F
            </a>
          </small>
        </div>
        <br />
        <div>
          <div className="info-text-1">{props.value.desc}</div>
          <div className="info-text-2">
            Feels like {props.value.feels}°C • Humidity {props.value.humidity}%
            • Wind {props.value.wind} m/s
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Conversion">
        <div className="currentTemp">
          {Math.round((props.value.temp * 9) / 5 + 32)}°F
        </div>
        <div>
          <small className="high-low-text">H: </small>
          <span className="light-text temperatures">
            {Math.round((props.value.high * 9) / 5 + 32)}
          </span>
          <small className="high-low-text"> L: </small>
          <span className="light-text temperatures">
            {Math.round((props.value.low * 9) / 5 + 32)}
          </span>
        </div>

        <br />

        <div className="light-text">
          <small className="units">
            <a href="/" onClick={toCel}>
              show weather in °C
            </a>
          </small>
        </div>
        <br />
        <div>
          <div className="info-text-1">{props.value.desc}</div>
          <div className="info-text-2">
            Feels like {Math.round((props.value.feels * 9) / 5 + 32)}°F •
            Humidity {props.value.humidity}% • Wind{" "}
            {Math.round(props.value.wind * 2.237)} mph
          </div>
        </div>
      </div>
    );
  }
}
