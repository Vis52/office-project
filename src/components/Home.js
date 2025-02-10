import React from 'react';
import './Body.css';
import bi from '../utils/img/bi.jpg';
import amplitude from '../utils/img/amplitude.jpg';
import amzon from '../utils/img/amzon.jpg';
import  google from '../utils/img/google.png';
import asana from '../utils/img/asana.png';
import shopify from '../utils/img/shopify.png';
import product from '../utils/img/product.png';
import grammarly from '../utils/img/grammarly.png';
import base from '../utils/img/base.png';
import play from '../utils/img/play.png';
import ge from '../utils/img/ge.jpg';
import bmage_product from '../utils/Bmage.js'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Our_Products from './products/Our_Products.js';
import Best_Selling from './bestproduct/Best_Selling.js';
import News from './news/News.js';
import Contact from './contact/Contact.js';

function Body() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className='container2'>
            {/* <Our_Products /> */}
            <div className='body-rl'>
            <div className='container-left'>
            
                <div className="line1">
                    <div className='line-left'><h1><b>Organic </b> </h1></div>
                    <div className='line-right'> <h1><b>Beauty </b></h1></div></div><br />
               <div className='u1'> <h2>ABOUT US</h2>
               </div>
                
                <p className="line2">
                 We are passionate about bringing you skincare products crafted from the finest organic ingredients.<br/> 
                 Our mission is to offer clean, effective beauty solutions that nourish your skin and respect the <br/>
                 environment, all while enhancing your natural glow.
                </p><br></br>
            <div className='btn'>
                <button  href='Explore Now'className="v1">Explore</button>
                <div className='play-image'><img src={play} alt=''/>
                </div>
                <button  href='How To Buy'className="v2">How To Buy</button>
                </div>
            </div>
            <div className='container-right'>
                <img src={ge} alt=''/>
            </div>
            </div>

            {/* <div className='img-container'>
                
               <div className='box'>
                 <img src={amzon} alt='' />
                <img src={asana} alt=''/>
                <img src={google} alt=''/>
                <img src={amplitude} alt=''/>
                <img src={shopify} alt=''/>
                <img src={product} alt=''/>
                <img src={grammarly} alt=''/>
                <img src={base} alt=''/>
                </div> */}
            {/* </div> */}
            
        <div className='bx'>
        <Slider {...settings}>
            {bmage_product.map((d)=>(
                <div key={d.id} className='vx'>
                    <div className='cx'>
                       <div className='jx'><img src={d.image} alt=''/></div>
                        </div>
                        </div>
            ))}
              </Slider>
        </div>
        {/* <Our_Products />
        <Best_Selling />
        <News />
        <Contact />   */}
      
        </div>
    );
}

export default Body;
