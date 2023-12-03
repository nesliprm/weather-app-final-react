import React from "react";

export default function Temp(props) {
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

      <div>
        <div className="info-text-1">{props.value.desc}</div>
        <div className="info-text-2">
          Feels like {props.value.feels}°C • Humidity {props.value.humidity}% •
          Wind {props.value.wind} m/s
        </div>
      </div>
    </div>
  );
}
