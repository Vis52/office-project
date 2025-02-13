import React, {useEffect} from 'react'
import bmage_product from '../../utils/Bmage.js'


const Logo = () => {
    const slideTheSlider = () => {
        const slider = document.getElementById("bestSellingSlider");
        const current = slider.scrollLeft;
        const max = slider.scrollWidth - slider.clientWidth;
        // if slider slided max return to start position
        if (current >= 0.9*max) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
        // else slide
        else {
          slider.scrollTo({
            left: slider.scrollLeft + slider.offsetWidth / 3,
            behavior: "smooth",
          });
        }
      }
    
      useEffect(()=> {
        setInterval(() => {
          slideTheSlider();
          // console.log("iuhgfdfty");
        }, 4000);
      })
    
  return (
    <div className='selling d-flex flex-row px-1 w=80% height=10px overflow-x-scroll hide-scrollbar vw-100' id="bestSellingSlider">
         {bmage_product.map ((d) => (
                <div key={d.id} className='vx'>
                
                       <div className='jx height=10px '><img  src={d.image} alt=''
                       style={{height:'50px'}}/></div>
                         
                         </div>
         ))} 
         </div>

        )
};

export default Logo;
