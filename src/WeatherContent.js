import React from "react";
import Showdate from "./Showdate";
import Temp from "./Temp";
import Icon from "./Icon";

export default function WeatherContent(props) {
  return (
    <div className="WeatherContent">
      <div className="container inner-edge">
        <div className="border-bottom row">
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
              <br />
              <br />
              <div>
                <Icon value={props.value.icon} size={80} />
              </div>
              <br />
              <div>
                <small className="light-text">currently</small>
              </div>

              <Temp value={props.value} />

              <br />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
