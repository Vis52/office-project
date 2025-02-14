import React from 'react';
import './Footer.css';
import ft from '../utils/img/ft.png'

function Footer() {
  return (
    <div className='container4'>
        <div className='footer-content'>
            <h4 href='Work With Us'>Work With Us</h4>
          <h4 href='Reach Your Happy Place'>Reach Your happy Place</h4>
            <h4 href='Sustainability'>Sustainability</h4>
            <h4 href='Investors Policy'>Investors Policy</h4>
            <h4 href='Privacy Policy'>Privacy Policy</h4>
            <h4 href='Terms & Condition'>Terms & Condition</h4>
        </div>

        <div className='footer-content2'>
            <h2>Description<p className='line3'>
            Embrace the natural beauty of organic<br/>
            skincare. Our products are crafted with<br/>
            the finest organic ingredients, free from <br/>
           harmful chemicals,to nourish and protect your<br/>
            skin. Sustainable,cruelty-free, and effective<br/>  
            because your skindeserves the best.</p></h2>
            
              <h4>  <img src={ft} alt='ft-image'/></h4>
            
            <h3> Why Our Products<br/>
            <ul>
  <li>Healthier Choice.</li>
     <li> Eco-Friendly</li>
<li> Chemical-Free.</li>
    <li>Sustainable Living.</li>
<li>Pure Ingredients.</li>
<li>Cruelty-Free.</li>
<li>Natural Beauty.</li>
<li>Nurturing Skin.</li>
<li>Gentle Care.</li>
<li>Toxin-Free.</li>
</ul> </h3>           
        </div>
        <div className='footer-content3'>
          <h1>Organic
        
          Beauty</h1>
        </div>
        
      
    </div>
  )
}

export default Footer;
