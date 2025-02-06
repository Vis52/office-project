import React from 'react'
import best_product from '../../utils/Best'
import Item from '../Item/Item'
import './Best_Selling.css';
import Selling from '../selling/Selling';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Best_Selling = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='best_selling'>
        <h1>Best Selling Products</h1><br/>
        <p> Discover Our Best Deals On The Balancing Gel Cleanser!Perfect For Keeping<br/>
              Your Skin Refreshed And Growing.The Perfect 
            Yet Effective Cleanser Is Now<br/> 
           <p1> Available At Unbeaten price</p1></p>
             <div className='selling'>
              {/* <Slider {...settings}> */}
                {/* <div className='op'> */}
                {best_product.map((item ,i) =>{
                    return <Selling key={i} id={item.id}  name={item.name} image={item.image} description={item.description} price={item.price}/>
                })}
                
                {/* </Slider> */}
             </div>
      
    </div>
  )
}

export default Best_Selling
