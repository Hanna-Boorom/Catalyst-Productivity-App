import axios from "axios";
import { useEffect } from "react";
import { weatherConfig } from "../services";

function Weather() {
  const url = "api.openweathermap.org";
  const getWeather = async () => {
    const resp = await axios.get(
      `${url}/data/2.5/weather?zip=94040,us&APPID=${weatherConfig}`
    );
    console.log(resp);
  };

  useEffect(() => {
    getWeather();
  });

  return (
    <div>
      <h1>Weather Goes Here!</h1>
    </div>
  );
}

export default Weather;
