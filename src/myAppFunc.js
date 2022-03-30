import './ShowData.css';
import axios from 'axios';
import {useEffect, useState} from "react";

const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});


function MyApp() {
 
  const defaultState={
    timeStamp:"",
    forecast:"",
    relative_humidity:{},
    temperature:{},
   
  }
  const [neaData,setNeaData]=useState(defaultState);
 

  useEffect(()=>{
    findNEAData();
     return;
  },[])

  async function findNEAData() {
    let nowTime = new Date().toISOString().slice(0, -5);
    const response = await API.get("/24-hour-weather-forecast",{
      params: {
        date: [nowTime],
      }
  })
  
    if (response.status===200){
      let data={defaultState}
        data.timeStamp=response.data.items[0].timestamp;
        data.forecast=response.data.items[0].general.forecast;
        data.relative_humidity=response.data.items[0].general.relative_humidity;
        data.temperature=response.data.items[0].general.temperature
        setNeaData(data)
        
    }
  }

  return (
    <div className="App">
     <u>Assignment 2.12: React and axios.</u>
     <br/><br/>
     <u>24 hours weather forecast</u>
     <br/>
      Time of forecast: {((neaData.timeStamp).slice(0,-9)).substr(-5)}
     <br/> 
     Forecast: {neaData.forecast}
     <br/>
     Temperature (Low/High): {neaData.temperature.low}C/{neaData.temperature.high}C
     <br/>
     Humidity(Low/High): {neaData.relative_humidity.low}/{neaData.relative_humidity.high}
    </div>
  );
}

export default MyApp;
