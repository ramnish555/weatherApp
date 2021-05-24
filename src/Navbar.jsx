import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const NavBar = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand"><span style={{marginRight: "5px"}}><WbSunnyIcon/></span>Weather App</span>
                    
                </div>
            </nav>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div style={{width: "100%",textAlign: "center"}}><small className="text-muted">© Copyright 2021, Ramnish Chuadhary</small></div>
            </nav>
        </>
    )
}

export default NavBar;