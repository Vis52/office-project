import React from 'react'
import'./Selling.css';

const Selling = (props) => {
  return (
    <div className='Item'>
        <div className='img-container'>
        <img src={props.image} alt=''/></div>
        <p>{props.name}</p>
        <div className='des'>
        {props.description}</div>
        <div className='price'>
           Buy Now | ${props.price}
        </div>
      
    </div>
  )
}

export default Selling;
