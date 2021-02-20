import axios from "axios";
import { useEffect, useState } from "react";
import { weatherConfig } from "../services";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  // const [newZipCode, setNewZipCode] = useState();
  const [currentZipCode, setCurrentZipCode] = useState(60060);

  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${currentZipCode},us&&units=imperial&appid=${weatherConfig}`
      );
      setWeatherData(resp.data);
      console.log(resp.data);
    };
    getWeather();
  }, [currentZipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentZipCode(currentZipCode);

    props.setToggleFetch((curr) => !curr);

    // setZipCode("");
  };

  if (!weatherData) {
    return <h4>...Loading...</h4>;
  }

  return (
    <div>
      {/* <h5>
        It's currently {Math.round(weatherData.main.temp)}° in{" "}
        {weatherData.name}{" "}
      </h5> */}
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
