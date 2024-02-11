import React,{useState} from 'react'
import WeatherCard from './WeatherCard';
import './WeatherInfo.css'



const WeatherInfo = () => {
  const[searchValue,setSearchValue]=useState("Delhi");
const [temInfo,setTemInfo]=useState({});


  const getWeatherInfo=async()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c8bbb320de187d8c6738f2cb43421f0`;
    // console.log(url);
    const res= await fetch(url);
    const data=await res.json();
    // console.log(data);
    const {temp,humidity,pressure}=data.main;
    const weathermood=data.weather[0].main;
    const{name}=data; 
    const{speed}=data.wind;
     const{country,sunset}=data.sys;
    // console.log(weathermood);
    // console.log(country);
    const weatherInfo={temp,humidity,pressure,weathermood,name,speed,
    country,sunset};
    // console.log(weatherInfo);
    setTemInfo(weatherInfo);
  }

// console.log(temInfo);

  const searchingValue=((e)=>{
    // console.log(e);
    setSearchValue(e.target.value);
  });

  return (
    <>
    <div className="wrap">
      <div className="search">
        <input type="search" value={searchValue} onChange={searchingValue}/>
        <button onClick={getWeatherInfo}>Search</button>
      </div>
    </div>
    <WeatherCard temporaryInfo={temInfo}/>
    </>
  )
}

export default WeatherInfo;