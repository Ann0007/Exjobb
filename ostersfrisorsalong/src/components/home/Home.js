import React from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import girl from '../../images/girl.jpg';
import lightredhair from '../../images/lightredhair.jpg';
import man from '../../images/man3.jpg';
import wella from '../../images/wella.jpg';
import sassoon from '../../images/sassoon.jpg';

function Home (){

    setTimeout(() => {
        AOS.init({duration: 3000,});
      }, 1000);
    

    return(
        <div className="start-container">
        <Navbar/> 
            <div className="welcome-box">
                <p data-aos="fade-down" className="welcome-text">
                    Välkommen till <br/>den personliga salongen
                </p>
                <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0"> 
                    <p className="welcome-information-header">Låt oss ta hand om dig en stund</p> 
                    <p className="welcome-information-text"> 
                            Här kan du klippa dig, färga håret, få styling.<br/>
                            Allt med fokus på dig och kvalité.
                    </p> 
                    <a href="https://www.bokadirekt.se/" target="_blank"> 
                        <button className="reserve-button">Boka</button>
                    </a> 
                </div>               
            </div>
            
            <div className="grid-container">
                <div className="imgBox">
                
                    <div data-aos="fade-up" data-aos-delay="200" className="start-hair-image1">
                        <p className="link-start-prices">Priser</p>
                        <p className="start-prices">Läs mer...</p>
                        <NavLink exact to="/prices">                        
                            <img src={girl} 
                            className="start-grid-img"
                            alt="hair model"                           
                            />                                                 
                        </NavLink>                                            
                    </div>    

                   <div data-aos="fade-up" data-aos-delay="200" className="start-hair-image2">
                        <p className="link-start-aboutus">Om oss</p>
                        <p className="start-aboutus">Läs mer...</p> 
                        <NavLink exact to="/aboutus">  
                            <img src={man} 
                            className="start-grid-img"
                            alt="hair model"
                            />   
                       </NavLink>      
                    </div>
 
                    <div data-aos="fade-up" data-aos-delay="200" className="start-hair-image3">
                        <p className="link-start-gallery">Galleri</p>
                        <p className="start-gallery">Läs mer...</p>
                        <NavLink exact to="/gallery">
                            <img src={lightredhair} 
                            className="start-grid-img"
                            alt="hair model"
                            />         
                        </NavLink>    
                    </div>                  
                </div>
            </div>

            <div className="startInformation-container">  
                <div class="row">
                    <div className="col">
                        <p className="covid-header" >Covid-19</p>  
                        <p className="covid-information-text"> 
                            <br/>
                            I vårt arbete träffar vi många kunder varje dag. 
                            Vi är väldigt måna om att du som kund ska känna dig trygg att komma till oss. <br/><br/>
                            Vi vill därför be dig, att ifall du har en anhörig hemma som är sjuk eller om du har
                            symtom i luftvägarna eller feber, att du stannar hemma. Tack!
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="logo-box">
                <img className="start-logo-image" src={wella} alt="hair model"/>
                <img className="start-logo-image" src={sassoon} alt="hair model"/>
            </div>
            <Footer/>           
        </div>       
    )
}
export default Home;