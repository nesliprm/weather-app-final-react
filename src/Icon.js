import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  let valueMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  if (
    valueMapping[props.value] === "CLEAR_DAY" ||
    valueMapping[props.value] === "PARTLY_CLOUDY_DAY"
  ) {
    return (
      <ReactAnimatedWeather
        icon={valueMapping[props.value]}
        color="#f78536"
        size="100"
        animate={true}
      />
    );
  } else {
    if (
      valueMapping[props.value] === "CLEAR_NIGHT" ||
      valueMapping[props.value] === "PARTLY_CLOUDY_NIGHT"
    ) {
      return (
        <ReactAnimatedWeather
          icon={valueMapping[props.value]}
          color="#2b4450"
          size="100"
          animate={true}
        />
      );
    } else {
      if (
        valueMapping[props.value] === "RAIN" ||
        valueMapping[props.value] === "FOG" ||
        valueMapping[props.value] === "CLOUDY"
      ) {
        return (
          <ReactAnimatedWeather
            icon={valueMapping[props.value]}
            color="#497285"
            size="100"
            animate={true}
          />
        );
      } else {
        return (
          <ReactAnimatedWeather
            icon={valueMapping[props.value]}
            color="#dfebed"
            size="100"
            animate={true}
          />
        );
      }
    }
  }
}
