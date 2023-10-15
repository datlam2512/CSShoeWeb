
import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';

export const CartItem = (props) => {
  const { id, imgUrl, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemcount } = useContext(ShopContext)

  let priceOfItem = price.toLocaleString();
  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={imgUrl} />

      </div>
      <div className='cart-item-description'>
        <div className='cart-item-name'>
          <h1 className='item-name'>
            <Link to={`/product-detail/${id}`}>{name}</Link>
          </h1>
        </div>
      </div>

      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemcount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id, 1)}> + </button>
      </div>

      <div className='cart-item-price'>
        <p>{priceOfItem + " VNĐ"}</p>
      </div>
    </div>
  )
}



