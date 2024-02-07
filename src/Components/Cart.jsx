import React , {useEffect, useState} from 'react'
import "./Cart.css"

export const Cart = ({cart, setCart}) => {
  const [amount,setAmount] = useState(0);

  const priceHandling = () =>{
    let total = 0;
    cart.map((item)=>(
      total+= item.quantity * item.price
      ))
      setAmount(total);
  }

  const removeCart = (id)=>{
    const product = cart.filter((item)=>
      item.id !== id
    );
    setCart(product);
  }

  useEffect(()=>{
    priceHandling();
  })

  return (
    <article>
    {
       cart.map((item)=>(
          <div className="cart-container" key={item.id}>
            <div className="cart-details">
              <img src={item.img} alt="dress"/>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div className="add-minus">
              <button className='add'>+</button>
              <button className='add'>{item.quantity}</button>
              <button className='add'>-</button>
              <button className="remove-button" onClick={()=>removeCart(item.id)}>Remove</button>
            </div>
          </div>
       ))

    }
    <p>Total Amount of your Cart</p>
    <p>Rs - {amount}</p>
    </article>
  );
};
