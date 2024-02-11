import React, { useEffect, useState } from 'react'
import './WeatherCard.css';
import { WiSunset,WiHumidity, WiRainWind } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

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

        let sec=sunset;
        let date=new Date(sec* 1000);
        let timeStr=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <div className='main'>
        <div className='cityname'>
        <div className='ctn'>{name}  {country}</div>
        </div>
        <div className='tem'>
        <div className='temp'>{temp}&deg;</div>
        </div>
        <div className='stw'>
        <span className='state' >{weatherState}</span>
        <span className='wthmood'>{weathermood}</span>
        </div>
        <div className='sphs'>
        <span><p><WiSunset/></p>
            <span>
            <p>{timeStr} PM</p>
            <p>Sunset</p></span>
            </span>
        <span><p><WiRainWind/></p>
            <span>
            <p>{pressure}</p>
            <p>Pressure</p></span>
            </span>
        <span><p><FiWind/></p>
            <span>
            <p>{speed}</p>
            <p>Speed</p></span>
            </span>
        <span><p><WiHumidity/></p>
            <span>
            <p>{humidity}</p>
            <p>Humidity</p></span>
            </span>
        </div>
    </div>
  )
}

export default WeatherCard