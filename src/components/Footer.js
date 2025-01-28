import React from 'react';
import './Footer.css';
import ft from '../utils/img/ft.png'

function Footer() {
  return (
    <div className='container'>
        <div className='footer-content'>
            <h4 href='Work With Us'>Work With Us</h4>
          <h4 href='Reach Your Happy Place'>Reach Your happy Place</h4>
            <h4 href='Sustainability'>Sustainability</h4>
            <h4 href='Investors Policy'>Investors Policy</h4>
            <h4 href='Privacy Policy'>Privacy Policy</h4>
            <h4 href='Terms & Condition'>Terms & Condition</h4>
        </div>

        <div className='footer-content2'>
            <h2>Vishal Sharma<p className='line3'>At the heart of our balancing ge<br></br>
            Cleanser Is A Commitment To <br ></br>
            Skincare That Harmonizes Science.</p></h2>
            
              <h2>  <img src={ft} alt='ft-image'/></h2>
            
            <h2>Contact Me</h2>
        </div>
        
      
    </div>
  )
}

export default Footer;
