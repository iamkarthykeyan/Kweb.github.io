import React from 'react'
import './Product.css'
import { Cards } from './Cards';
import list  from './data';


export const Product = ({handleClick}) => {
  return (
    <>
    <div className="product-section">
      {
        list.map((item)=>(
            <Cards key={Math.random()} item={item} handleClick={handleClick}/>
        ))
      }
    </div>
    </>
  )
}
