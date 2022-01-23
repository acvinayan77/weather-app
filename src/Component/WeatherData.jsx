import React from 'react';
import { Day } from '../Assets/Index';
import './Weather.css'

function WeatherData(props) {
  return <div>
      <div className="condition">
          <h1 >{`${Math.floor(props.Weather?.main?.temp -273)} °C`} <br /> {`  ${props.Weather?.weather[0].description}`}</h1>
          
      </div>
      <div className="Dayimg"><Day className="Day4" /></div>
      <p className="location">{`${props.Weather?.name},${props.Weather?.sys?.country}`}</p>
  </div>;
}

export default WeatherData;


