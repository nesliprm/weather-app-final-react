import React from "react";
import Showdate from "./Showdate";

export default function WeatherContent(props) {
  return (
    <div className="WeatherContent">
      <div className="container inner-edge">
        <div className="row">
          <span className="col-sm">
            <div className="col-sm">
              <h1>{props.value.name}</h1>
              <div className="sub-text">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <small>{props.value.country}</small>
              </div>

              <small className="updateInfo">
                Last updated:{" "}
                <span>
                  <Showdate value={props.value.date} />
                </span>
              </small>

              <div>
                <img
                  src={props.value.icon}
                  alt={props.value.desc}
                  className="iconStyle"
                />
              </div>

              <div>
                <small className="light-text">currently</small>
              </div>
              <div className="currentTemp">{props.value.temp}°C</div>
              <div>
                <small className="high-low-text">H: </small>
                <span className="light-text temperatures">
                  {props.value.high}
                </span>
                <small className="high-low-text"> L: </small>
                <span className="light-text temperatures">
                  {props.value.low}
                </span>
              </div>

              <br />

              <div className="light-text">
                <a className="units" href="/">
                  °C
                </a>{" "}
                |{" "}
                <a className="units" href="/">
                  °F
                </a>
              </div>
              <br />
              <div>
                <div className="info-text-1">{props.value.desc}</div>
                <div className="info-text-2">
                  Feels like {props.value.feels}°C • Humidity{" "}
                  {props.value.humidity}% • Wind {props.value.wind} m/s
                </div>
              </div>

              <br />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
