import axios from "axios";
import { useEffect, useState } from "react";
import { weatherConfig } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    // setCurrentZipCode("");
  };

  if (!weatherData) {
    return <h4>...Loading...</h4>;
  }

  return (
    <div>
      {/* <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      /> */}

      <h5>
        It's currently {Math.round(weatherData.main.temp)}° in{" "}
        {weatherData.name}{" "}
      </h5>

      <form className="weather-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Your ZipCode"
          value={currentZipCode}
          onChange={(e) => setCurrentZipCode(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Get Current Weather
        </button>
      </form>
    </div>
  );
}

export default Weather;
