import React from 'react';
import imagename from './images/weather.gif';

const NavBar = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" style={{width: "100%",textAlign: "center"}}><span><img src={imagename} alt="image" style={{maxWidth: "50px",maxHeight: "50px"}}/></span>Weather App</span>
                </div>
            </nav>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div style={{width: "100%",textAlign: "center"}}><small className="text-muted">© Copyright 2021, Ramnish Chuadhary</small></div>
            </nav>
        </>
    )
}

export default NavBar;