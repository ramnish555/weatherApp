import React, { useEffect, useState } from 'react';
import LoadImage from './LoadImage';
import { FaLongArrowAltUp , FaLongArrowAltDown } from 'react-icons/fa';

const Card = ()=>{
    const [val,setVal] = useState("Amritsar");
    const [apiData,setData] = useState(null);
    // const [apiCityData,setCityData] = useState(null);

    const getDetails = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=3a01a344d25d44853cc11dfccbe4ddcd`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            // console.log(data);
        }catch(error){
            console.log("error while Fetching");
        }
    }

    const inputCity = (event) =>{
        setVal(event.target.value);
    }

    useEffect(()=>{
        getDetails();
    },[]);

    const submitBtn = (event)=>{
        event.preventDefault();
        getDetails();
    }

    const hide = ()=>{
        document.getElementsByClassName('fixed-bottom')[0].style.display="None";
    }

    const show = ()=>{
        document.getElementsByClassName('fixed-bottom')[0].style.display="block";
    }

    return(
        <>
            <div className="card" style={{width: "20rem"}}>
                {
 
                }
                <div className="card-body">
                <form className="row g-3" onSubmit={submitBtn}>
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Enter City Name" value={val} onChange={inputCity} onFocus={hide} onBlur={show}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </form>
                {
                    !apiData?null:
                    apiData.cod === "404" || apiData.cod === "400"?<h5 className="card-title" style={{textAlign: "center",padding:"50px"}}>City Not Found</h5>:
                    (
                        <>
                        <div style={{textAlign: "center",marginTop: "10px"}}>
                            <h5 className="card-title">{apiData.name} ({apiData.sys.country})</h5>
                            {/* <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`} className="icon" alt="Content"/> */}
                            <LoadImage icon={apiData.weather[0].icon} desc={apiData.weather[0].description}/>
                            <p className="card-text" style={{fontSize: "1.5rem"}}><b>{(Math.round((parseFloat(apiData.main.temp)-273.15) * 100) / 100).toFixed(2)}°C</b></p>
                            <p className="card-text" style={{ display: "flex",flexDirection: "row",justifyContent: "space-around"}}>
                                <span>
                                <b>{(Math.round((parseFloat(apiData.main.temp_min)-273.15) * 100) / 100).toFixed(2)}°C<FaLongArrowAltDown/>
                                </b></span>
                                <span style={{textAlign:"right"}}>
                                <b>{(Math.round((parseFloat(apiData.main.temp_max)-273.15) * 100) / 100).toFixed(2)}°C<FaLongArrowAltUp/>
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