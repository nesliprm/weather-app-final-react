import React from "react";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
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
