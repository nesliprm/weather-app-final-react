import React from "react";
import Showdate from "./Showdate";
import Conversion from "./Conversion";
import Icon from "./Icon";

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
              <br />
              <br />
              <div>
                <Icon value={props.value.icon} />
              </div>
              <br />
              <div>
                <small className="light-text">currently</small>
              </div>

              <Conversion value={props.value} />

              <br />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
