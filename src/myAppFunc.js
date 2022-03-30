import API from "./API"
import {useEffect, useState} from "react";
import ShowData from "./ShowData"


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
    <div>
      <ShowData neaData={neaData}/>
    </div>
  );
}

export default MyApp;
