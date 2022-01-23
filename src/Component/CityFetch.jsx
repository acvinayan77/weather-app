import React from 'react';
import './City.css'

function CityFetch(props) {
  return <div>
       <img src="/icons/perfect-day.svg" alt="" className="city" />
       <p className="find">Find Weather</p>
       <form onSubmit={props.fetchWeather}>
           <input placeholder='City' className='search' onChange={(e)=>props.setCity(e.target.value)} />
           <button className='button' type='submit'> Search</button>
       </form>
  </div>;
}

export default CityFetch;
