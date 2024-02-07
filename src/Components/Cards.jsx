import React from 'react'
import './Cards.css'

export const Cards = ({item,handleClick}) => {

    const {img,title,type,description,color,reviews,details} = item;

  return (
    <>
    <div className="cards">
     <div className="image-container">
        <img src={img} alt="Image is Loading" />
     </div>
     <div className="cards-title">
      <p>{title}</p>
     </div>
     <div className='cards-details'>
      <p>({type})</p>
      <p>{description}</p>
      <p>Color: {color}</p>
      <p>REVIEWS: {reviews}</p>
      <p>{details}</p>
      <button className="add-cart" onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
     </div>    
   
    </>
  );
};
