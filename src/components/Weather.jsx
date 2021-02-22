import axios from "axios";
import { useEffect, useState } from "react";
import { weatherConfig } from "../services";

import WeatherIcon from "./WeatherIcon";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const localZip = localStorage.getItem("zip") || "";
  const [currentZipCode, setCurrentZipCode] = useState(localZip);

  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${currentZipCode},us&&units=imperial&appid=${weatherConfig}`
      );
      setWeatherData(resp.data);
      console.log(resp.data);

      if (localZip) {
        localStorage.setItem("zip", currentZipCode);
      }
    };
    getWeather();
  }, [localZip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("zip", currentZipCode);
    setCurrentZipCode(currentZipCode);
    props.setToggleFetch((curr) => !curr);
  };

  if (!weatherData) {
    return (
      <div>
        <p>Enter Zip Code Below for Current Weather: </p>
        <form className="weather-form" onSubmit={handleSubmit}>
          <input
            className="zipcode-input"
            type="number"
            placeholder="Type Zip Code & Press Enter"
            value={currentZipCode}
            onChange={(e) => setCurrentZipCode(e.target.value)}
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div className="weather-container">
        <div className="weather-icon">
          <WeatherIcon weatherData={weatherData} />
        </div>

        <p className="temperature">{Math.round(weatherData.main.temp)}°</p>
        <p className="city-name">{weatherData.name}</p>
      </div>
    );
  }
}

export default Weather;
