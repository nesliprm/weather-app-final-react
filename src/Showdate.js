import React from "react";

export default function Showdate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.value.getDay()];
  let hour = props.value.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let min = props.value.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  return (
    <div>
      {day} {hour}:{min}
    </div>
  );
}
