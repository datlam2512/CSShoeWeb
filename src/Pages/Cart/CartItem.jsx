import React, { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';

export const CartItem = (props) => {
  const { id, urlImg, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemcount, selectedSize, removeAll } = useContext(ShopContext);
  const priceOfItem = (cartItems[id] * price).toLocaleString();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateCartItemcount(Number(e.target.value), id);
    }
  };

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={urlImg} />
      </div>
      <div className='cart-item-description'>
        <div className='cart-item-name'>
          <div className='item-name'>
            <Link to={`/product-detail/${id}`}>{name}</Link>
          </div>
          <div className='item-size'>
            Size: <p className='size-value'>{selectedSize}</p>
          </div>
          <div className="item-remove">
              <button style={{paddingTop: "10px"}} onClick={() => removeAll(id)}>Remove</button>
          </div>
        </div>
      </div>

      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemcount(Number(e.target.value), id)}
          onKeyDown={handleKeyDown} 
        />
        <button onClick={() => addToCart(id, 1)}> + </button>
      </div>

      <div className='cart-item-price'>
        <p>{priceOfItem + " VNĐ"}</p>
      </div>
    </div>
  );
};
