import React from 'react';
import './footer.css';
import { Link } from "react-scroll";
import { FaArrowAltCircleUp ,  FaInstagram } from 'react-icons/fa';

function Footer (){  
    return(
        <div className="footer-container" >                     
            <div className="footer-info">
                <div className="phone-number">
                    <p>0470 - 188 30</p> 
                </div>
                <div className="contact">
                    <p className="contact-header" >Adress</p>
                    <p>Kvarnhagsgatan 2</p>
                    <p>352 40 Växjö</p>
                </div>  
                <div className="openingHours">
                    <p className="opening-header">Öppettider</p>
                    <p>Måndag-fredag: 9:00 - 17:30</p>
                    <p>Lunchstängt: 13:00 - 14:00 </p>
                </div>
                <div className="social-media-icons">
                    <p className="visit-us">Besök oss</p>
                    <a className="instagram-icon" href="https://www.instagram.com/ostersfrisorsalong/" target="_blank">
                        <FaInstagram className="insta-icon" size={35}/>
                    </a>
                </div>                               
            </div>
            <div className="scrollUp-icon">
                <Link to="Scroll-up" 
                    className="scroll-up-link"
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500}>
                    <FaArrowAltCircleUp className="arrowUp" size={27} style={{ fill: '#c9c9c9' }} />
                    <p className="toTop">Till toppen</p>
                </Link>  
            </div>
        </div>
    )
  }
  export default Footer

