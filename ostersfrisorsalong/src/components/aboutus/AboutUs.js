import React from 'react';
import './aboutus.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import vernisa from '../../images/VernisaBasic.jpg'


function AboutUs (){

    return(
        <div className="aboutUs-container">
            <Navbar/>
                <div className="aboutus-content">
                    <div className="row">
                        <div className="col-sm-8">
                        <p className="aboutus-header">Om oss</p>
                        <p className="aboutus">
                            Östers Frisörsalong har funnits sedan 1937 och är en av de äldsta frisörsalongerna i Växjö, till idag har det endast funnits tre ägare. 
                            <br/><br/>Nuvarande ägare, Vernisa Basic, är utbildad frisör med erfarenhet från Tyskland. Hon har jobbat 
                            inom frisörbranschen sedan 1999 och håller sig uppdaterad inom de senaste trenderna.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img className="vernisa-img" src={vernisa} alt="Owner Vernisa Basic"/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default AboutUs;

            //Code for old contact page with google map

            // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

            {/* <LoadScript
                googleMapsApiKey='AIzaSyBw6N61TaXP1_6HRGk8Sdgovx3M0PctSXs'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />
            </LoadScript>  */}


           {/* <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=KVARNHAGSGATAN%202%20%20352%2040%20V%C3%84XJ%C3%96&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe><a href="https://yt2.org"></a>
                </div>
            </div>
            <div className="contact-info">           
                <div className="contact-phone-number">
                    <p className="phone-header" >Ring och beställ tid</p>
                    <p>0470 - 188 30</p> 
                </div>            
                <div className="contact-address">
                    <p className="address-header" >Adress</p>
                    <p>Kvarnhagsgatan 2</p>
                    <p>352 40 Växjö</p>
                </div>  
                <div className="contact-openingHours">
                    <p className="contact-opening-header">Öppettider</p>
                    <p>Måndag-fredag: 9:00 - 17:30</p>
                    <p>Lunchstängt: 13:00 - 14:00 </p>
                </div>                            
            </div>    */}