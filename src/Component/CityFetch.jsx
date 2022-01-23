import React from 'react';
import { Day } from '../Assets/Index';
import './City.css'

function CityFetch(props) {
  return <div>
       <Day className="Day7"/>
       <p className="find">Find Weather</p>
       <form onSubmit={props.fetchWeather}>
           <input placeholder='City' className='search' onChange={(e)=>props.setCity(e.target.value)} />
           <button className='button' type='submit'> Search</button>
       </form>
  </div>;
}

export default CityFetch;
