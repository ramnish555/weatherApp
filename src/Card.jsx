import React, { useState } from 'react';

const Card = ()=>{
    const [val,setVal] = useState("");
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

    const submitBtn = (event)=>{
        event.preventDefault();
        getDetails();
    }

    return(
        <>
            <form className="row g-3" onSubmit={submitBtn}>
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Enter City Name" value={val} onChange={(event)=>{setVal(event.target.value)}}/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
            <div className="card" style={{width: "18rem"}}>
                {
                    !apiData?<img src="https://picsum.photos/300/200" className="card-img-top" alt="Content"/>:
                    apiData.cod === "404" || apiData.cod === "400"?<img src="https://picsum.photos/300/200" className="card-img-top" alt="Content"/>:
                    (
                        <>
                        <div className="imgContainer">
                            <img src="https://picsum.photos/300/200" className="card-img-top" alt="Content"/>
                            <div className="bottom-left">
                                <span>{apiData.weather[0].description}</span>
                                <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`} className="icon" alt="Content"/>
                            </div>
                        </div>
                        </>
                    )    
                }
                <div className="card-body">
                {
                    !apiData?<h5 className="card-title">Please Enter the City Name !!!.</h5>:
                    apiData.cod === "404" || apiData.cod === "400"?<h5 className="card-title">City Not Found</h5>:
                    (
                        <>
                            <h5 className="card-title">{apiData.name} ({apiData.sys.country})</h5>
                            <p className="card-text">Current Temp :: {(Math.round((parseFloat(apiData.main.temp)-273.15) * 100) / 100).toFixed(2)}°C</p>
                            <p className="card-text">Max Temp :: {(Math.round((parseFloat(apiData.main.temp_max)-273.15) * 100) / 100).toFixed(2)}°C</p>
                            <p className="card-text">Min Temp :: {(Math.round((parseFloat(apiData.main.temp_min)-273.15) * 100) / 100).toFixed(2)}°C</p>
                            <p className="card-text">Humidity :: {apiData.main.humidity}</p>
                            <p className="card-text"><small className="text-muted">Updated at {new Date(apiData.dt*1000).toLocaleTimeString()}</small></p>
                        </>
                    )    
                }   
                </div>
            </div>
        </>
    )
}

export default Card;