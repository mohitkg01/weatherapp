import React, { useEffect, useState } from 'react'
import './WeatherCard.css';

const WeatherCard = ({temporaryInfo}) => {
    const[weatherState,setWeatherState]=useState("");
    // console.log(temInfo.tempo);
    // console.log(temporaryInfo);
    const {temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset}=temporaryInfo;
// console.log(name);
useEffect(()=>{
    if(weathermood){
    switch(weathermood){
        case "Clouds":
            setWeatherState('wi-day-cloudy');
            break;
        case "Haze":
            setWeatherState("wi-fog");
            break;
        case "Clear":
            setWeatherState("wi-day-sunny");
            break;
        case "Mist":
            setWeatherState("wi-day-sunny");
            break;
        default:
            setWeatherState("wi-dust");
            break;
    }}
},[weathermood]);
  return (
    <div className='main'>
        <div className='cityname'>
        <div className='ctn'>{name}  {country}</div>
        </div>
        <div className='tem'>
        <div className='temp'>{temp}deg</div>
        </div>
        <div className='stw'>
        <span className='state' >{weatherState}</span>
        <span className='wthmood'>{weathermood}</span>
        </div>
        <div className='sphs'>
            <span>{speed}km/h</span>
            <span>{pressure}pr</span>
            <span>{humidity} humidity</span>
            <span>{sunset} sunset</span>
        </div>
    </div>
  )
}

export default WeatherCard