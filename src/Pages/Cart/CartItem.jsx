import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {  id, imgUrl, name, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemcount } = useContext(ShopContext)
  return (
    <div className='CartItem'>
      <img src={imgUrl}/>
      <div className='description'>
        <p>
            <b>{name}</b>
        </p>
        <p>{price}</p>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemcount(Number(e.target.value), id) }/>
            <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}



