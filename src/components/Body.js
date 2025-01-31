import React from 'react';
import './Body.css';
import bi from '../utils/img/bi.jpg';
import amplitude from '../utils/img/amplitude.jpg';
import amzon from '../utils/img/amzon.jpeg';
import  google from '../utils/img/google.png';
import asana from '../utils/img/asana.png';
import shopify from '../utils/img/shopify.png';
import product from '../utils/img/product.png';
import grammarly from '../utils/img/grammarly.png';
import base from '../utils/img/base.png';
import play from '../utils/img/play.png';

function Body() {
    return (
        <div className='container2'>
            <div className='body-rl'>
            <div className='container-left'>
            
                <p className="line1"><b>SKIN CLEANSER</b></p><br />
                <h1><b>Balancing Gel<br />Cleanser</b></h1>
                
                <p className="line2">
                    A balancing gel Cleanser is a gentle yet effective skincare product <br />
                    designed to remove impurities, excess oil, and makeup while <br />
                    maintaining the skin's natural pH balance.
                </p><br></br>
            <div className='btn'>
                <button  href='Explore Now'className="v1">Explore Now</button>
                <div className='play-image'><img src={play} alt=''/>
                </div>
                <button  href='How To Buy'className="v2">How To Buy</button>
                </div>
            </div>
            <div className='container-right'>
                <img src={bi} alt=''/>
            </div>
            </div>

            <div className='img-container'>
                
               <div className='box'>
                 <img src={amzon} alt='' />
                <img src={asana} alt=''/>
                <img src={google} alt=''/>
                <img src={amplitude} alt=''/>
                <img src={shopify} alt=''/>
                <img src={product} alt=''/>
                <img src={grammarly} alt=''/>
                <img src={base} alt=''/>
                </div>
            </div>
            
        
                
        
        </div>
    );
}

export default Body;
