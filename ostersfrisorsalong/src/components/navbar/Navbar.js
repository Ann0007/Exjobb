import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'

function Navbar (){

    return(
        <div className="navigation-container">
            <div id="Scroll-up"></div>
            <div className="start-header">
                <div className="headtext">
                    Östers 
                </div>
                <div className="subtext">
                    frisörsalong
                    <hr className="line"></hr>
                </div>
             </div>
            <div>
                <NavLink className="landingpage-navigation"  exact to="/"> 
                    <li className='landingpage-links'>Start</li>
                </NavLink>
                <NavLink className="landingpage-navigation"  exact to="/prices"> 
                    <li className='landingpage-links'>Priser</li>
                </NavLink>
                <NavLink className="landingpage-navigation"  exact to="/gallery"> 
                    <li className='landingpage-links'>Galleri</li>
                </NavLink> 
                <NavLink className="landingpage-navigation" exact to="/aboutus">
                    <li className='landingpage-links'>Om oss</li>
                </NavLink> 
            </div>                           
        </div>
   
    )
}
export default Navbar;