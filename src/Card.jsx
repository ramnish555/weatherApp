import React, { useEffect, useState } from 'react';

const Card = ()=>{
    const [val,setVal] = useState("Amritsar");
    const [apiData,setData] = useState(null);

    const getDetails = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=3a01a344d25d44853cc11dfccbe4ddcd`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            console.log(data);
        }catch(error){
            console.log("error while Fetching");
        }
        
        console.log(apiData);
    }

    useEffect(()=>{
        getDetails();
    },[]);

    const submitBtn = (event)=>{
        event.preventDefault();
        getDetails();
    }

    return(
        <>
            <div className="card" style={{width: "20rem"}}>
                {
 
                }
                <div className="card-body">
                <form className="row g-3" onSubmit={submitBtn}>
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Enter City Name" value={val} onChange={(event)=>{setVal(event.target.value)}}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </form>
                {
                    !apiData?<h5 className="card-title" style={{textAlign: "center",padding:"50px"}}>Please Enter the City Name !!!</h5>:
                    apiData.cod === "404" || apiData.cod === "400"?<h5 className="card-title" style={{textAlign: "center",padding:"50px"}}>City Not Found</h5>:
                    (
                        <>
                        <div style={{textAlign: "center",marginTop: "10px"}}>
                            <h5 className="card-title">{apiData.name} ({apiData.sys.country})</h5>
                            <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`} className="icon" alt="Content"/>
                            
                            <p className="card-text">Current Temp :: <b>{(Math.round((parseFloat(apiData.main.temp)-273.15) * 100) / 100).toFixed(2)}°C</b></p>
                            <p className="card-text" style={{ display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
                                <span>
                                Min :: <b>{(Math.round((parseFloat(apiData.main.temp_min)-273.15) * 100) / 100).toFixed(2)}°C
                                </b></span>
                                <span style={{textAlign:"right"}}>
                                Max :: <b>{(Math.round((parseFloat(apiData.main.temp_max)-273.15) * 100) / 100).toFixed(2)}°C
                                </b></span>
                            </p>
                            <p className="card-text">Humidity :: <b>{apiData.main.humidity}</b></p>
                            <span>(  {apiData.weather[0].description}  )</span>
                            <p className="card-text"><small className="text-muted">Updated at {new Date(apiData.dt*1000).toLocaleTimeString()}</small></p>
                        </div>
                        </>
                    )    
                }   
                </div>
            </div>
        </>
    )
}

export default Card;