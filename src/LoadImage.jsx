import React from 'react'
	
const LoadImage = ({icon,desc}) =>{
    let imgsrc = "";
    if(icon.includes('d')){
        if(desc === "clear sky"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/day.svg`;
        }else if(desc === "few clouds"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy-day-2.svg`;
        }
        else if(desc === "scattered clouds"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy-day-1.svg`;
        }
        else if(desc.includes("clouds")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy.svg`;
        }
        else if(desc === "shower rain"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/rainy-1.svg`;
        }
        else if(desc === "rain"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/rainy-6.svg`;
        }
        else if(desc.includes("rain")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/rainy-7.svg`;
        }
        else if(desc.includes("thunderstorm")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/thunder.svg`;
        }
        else if(desc.includes("snow")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/snowy-6.svg`;
        }
        else if(desc === "mist"){  
            imgsrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        }
    }else{
        if(desc === "clear sky"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/night.svg`;
        }else if(desc === "few clouds"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy-night-2.svg`;
        }
        else if(desc === "scattered clouds"){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy-night-1.svg`;
        }
        else if(desc.includes("clouds")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/cloudy.svg`;
        }
        else if(desc.includes("rain")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/rainy-7.svg`;
        }
        else if(desc.includes("thunderstorm")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/thunder.svg`;
        }
        else if(desc.includes("snow")){
            imgsrc = `${process.env.PUBLIC_URL}/animated/snowy-6.svg`;
        }
        else if(desc === "mist"){  
            imgsrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        }
    }
    return(
        <>
            <img src={imgsrc} className="icon" alt="Content"/> 
        </>
    )
}

export default LoadImage;