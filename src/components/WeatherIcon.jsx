import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherIcon(props) {
  const weatherConditions = props.weatherData.weather[0].main;

  if (weatherConditions == "Haze") {
    return <FontAwesomeIcon icon={["fas", "smog"]} />;
  } else if (weatherConditions == "Drizzle") {
    return <FontAwesomeIcon icon={["fas", "cloud-showers-heavy"]} />;
  } else if (weatherConditions == "Thunderstorm") {
    return <FontAwesomeIcon icon={["fas", "cloud-showers-heavy"]} />;
  } else if (weatherConditions == "Snow") {
    return <FontAwesomeIcon icon={["fas", "snowflake"]} />;
  } else if (weatherConditions == "Clear") {
    return <FontAwesomeIcon icon={["fas", "sun"]} />;
  } else if (weatherConditions == "Cloud") {
    return <FontAwesomeIcon icon={["fas", "cloud"]} />;
  } else {
    return <FontAwesomeIcon icon={["fas", "smog"]} />;
  }
}

export default WeatherIcon;
