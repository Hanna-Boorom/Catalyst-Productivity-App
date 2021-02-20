import axios from "axios";
import { useEffect } from "react";
import { weatherConfig } from "../services";

function Weather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?zip=60060,us&appid=";
  const zip = 60060;

  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(`${url}${weatherConfig}`);
      console.log(resp.data);
    };
    getWeather();
  }, []);

  return (
    <div>
      <h1>Weather Goes Here!</h1>
    </div>
  );
}

export default Weather;
