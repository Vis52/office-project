import React from 'react'
import'./Item.css';

const Item = (props) => {
  return (
    <div className='Item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className='des'>
        {props.description}</div>
        <div className='price'>
           Buy Now | ${props.price}
        </div>
      
    </div>
  )
}

export default Item;
