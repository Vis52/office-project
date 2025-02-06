import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Contact.css';
import coll from '../../utils/img/coll.jpg'

const Contact = () => {
  return (
    <div className='contact-info'>
        <h1> Contact Us</h1><br/>
        <div className='contact-container'>
            {/* <div className='co'> */}
                
           <a href='' className='icon-link'> <i class="bi bi-telephone-forward"> </i>    +91-6398730468</a>
           <a href='' className='icon-link'> <i class="bi bi-envelope-at"></i>myselfvishal954@gmail.com </a>
           <a href='' className='icon-link'> <i class="bi bi-linkedin"></i> Vishal Sharma</a>
            <a href='' className='icon-link'><i class="bi bi-github"></i> Vis52</a>
            <a href='' className='icon-link'><i class="bi bi-instagram"></i>Vishal_Sharma_0002</a>
            

            {/* </div> */}
            {/* <div className='c-right'>
                {/* <img src={coll} alt=''/> */}
{/* 
            </div> */} 
        </div>
      
    </div>
  )
}

export default Contact;
