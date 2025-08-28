import React from "react";
import "./Weather.css";
import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  
  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d96cfc1c88a7fa219441dc82968c6eb5&units=metric`);
            setWeather(response.data);
    } 
    catch(error) {
      console.log("Error of fetching weather data" , error)
    }
  };
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <>
      <div className="weather-container">
        Weather
        <input className="inpt"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={onCityChange}
        />
        <br/>
        <button className="btn" onClick={handleClick}> Get Weather</button>
        {weather && (
          <div className="weather-info"> 
          <h3>City name :{weather.name}</h3>
          <p>Temp is :{weather.main.temp}</p>
          <p>Description is :{weather.weather[0].description}</p>
        </div>)
        }     
        </div>
    </>
  );
};

export default Weather;
