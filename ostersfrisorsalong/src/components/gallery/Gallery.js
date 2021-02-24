import React, { useState }  from 'react';
import './gallery.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Popup from '../popUp/Popup';
import brud2 from '../../images/brud2 .jpg';
import redheadyounggirl from '../../images/redheadyounggirl.jpg';
import man2 from '../../images/man2.jpg';
import man from '../../images/man.jpg';
import blond from '../../images/blond.jpg';
import brud1 from '../../images/brud1.jpg';
import woman from '../../images/woman.jpg';
import borste from '../../images/borste.jpg';
import curls from '../../images/curls.jpg';
import brunette from '../../images/brunette.jpg';


function Gallery (){
    const [isOpen, setIsOpen] = useState(false);
    const [imgSrc, setimgSrc] = useState('');

    const togglePopup = (img) => {
      setIsOpen(!isOpen);
      setimgSrc(img);
    }
    
    return(
        <div className="gallery-container">
        <Navbar/>
            {isOpen && <Popup
                content={<>
                    <img src={imgSrc} className="popupImg" alt="" /> 
            </>}
                handleClose={togglePopup}
            />}
            
            <div className="container">  
                <div className="row">
                    <div className="col">
                        <div className="galleryInfoText">
                            <p className="gallery-header">Galleri</p>
                            <p className="gallery-text">Inspireras av frisyrer, färg och håruppsättningar av våra duktiga frisörer.</p>
                        </div>
                    </div>
                </div>       
                <div className="gallery">

                   <div className="gallery__item gallery__item--1">
                        <img src={borste} 
                            className="gallery__img" 
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(borste)}
                        />
                    </div> 

                    <div className="gallery__item gallery__item--2">
                        <img src={brud2} 
                            className="gallery__img" 
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(brud2)}
                        />
                    </div> 
                
                    <div className="gallery__item gallery__item--3">
                        <img src={redheadyounggirl} 
                            className="gallery__img" 
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(redheadyounggirl)}
                        />                      
                    </div>   

                    <div className="gallery__item gallery__item--4">
                        <img src={man} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(man)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--5">
                        <img src={woman} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(woman)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--6">
                        <img src={brud1} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(brud1)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--7">
                        <img src={curls} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(curls)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--8">
                        <img src={blond} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(blond)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--9">
                        <img src={brunette} 
                            className="gallery__img"
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(brunette)}
                            />   
                    </div>

                    <div className="gallery__item gallery__item--10">
                        <img src={man2} 
                            className="gallery__img" 
                            alt="Sunset road..." 
                            onClick={()=>togglePopup(man2)}
                        />
                    </div> 
                  
                </div>
            </div> 
        <Footer/>
        </div>
    )
}

export default Gallery;

