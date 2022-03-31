import config from "./config";
import "./ShowData.css";


function ShowData({neaData}){

  return (
    <div className="App">
     <u>24 hours weather forecast</u>
     <br/>
      Time of forecast: {((neaData.timeStamp).slice(0,-9)).substr(-5)}
     <br/> 
     Forecast: {neaData.forecast}
     <br/>
     Temperature (Low/High): {neaData.temperature.low}C / {neaData.temperature.high}C
     <br/>
     Humidity(Low/High): {neaData.relative_humidity.low} / {neaData.relative_humidity.high}
     <br/><br/>
     <div>BaseURL:{config.baseURL}</div>
    </div>

   
  );
}

export default ShowData