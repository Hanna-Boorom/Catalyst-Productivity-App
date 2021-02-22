function WeatherIcon(props) {
  const weatherConditions = weatherData.weather[0].main;

  if (weatherConditions == "Haze") {
    return <FontAwesomeIcon icon={["fas", "smog"]} />;
  } else if (weatherConditions == "Drizzle") {
    return <FontAwesomeIcon icon={["fas", "cloud-showers-heavy"]} />;
  }
}

export default WeatherIcon;
