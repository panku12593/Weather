import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Weather.module.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8ce88b6e0b1f3f4f90b32c534424d45`
      );
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={classes.di}>
      <form className={classes.frm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          className={classes.textInput}
          onChange={handleInputChange}
        />
        <button className={classes.Button} type="submit">
          Get Weather
        </button>
      </form>

      <div className={classes.di2}>
        {weatherData ? (
          <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like : {weatherData.main.feels_like}°C</p>
            <p>Humidity : {weatherData.main.humidity}%</p>
            <p>Pressure : {weatherData.main.pressure}</p>
            <p>Wind Speed : {weatherData.wind.speed}m/s</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <footer>Page created by Pankaj Sharma</footer>
    </div>
  );
};

export default Weather;