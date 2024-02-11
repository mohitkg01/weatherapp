import React from 'react'

const Datebuilder = () => {
    const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

    const currentDate=new Date();
    const date=`${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`
    
  return (
    <div className='date' style={ {
      color:"#fff",
      fontSize:"18px",
      fontWeight:"bold",
     textAlign:"center",
      marginBottom:"20px",
      marginTop:"50px"
    }}>{date}</div>
  )
}

export default Datebuilder

