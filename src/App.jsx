import './App.css';
import WeatherData from './Component/WeatherData';
import axios from "axios"
import { useState } from "react";
import CityFetch from './Component/CityFetch';

const API_KEY ="b1ba8187948a0a753b80926e52103a57";

function App() {
  const [City, setCity] = useState()
  const [Weather, setWeather] = useState()

  const fetchWeather=async(e)=>{
    e.preventDefault();
   const response=await
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)
    setWeather(response.data)
  }
  return (
    <div className="App">
   <span>WEATHER APP</span>
   {Weather ? (
  <WeatherData Weather={Weather}/> ) : (
    <CityFetch setCity={setCity} fetchWeather={fetchWeather}/>
  )}
    </div>
  );
}

export default App;
