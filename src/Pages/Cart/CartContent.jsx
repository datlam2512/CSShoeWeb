import React, { useContext } from 'react'
import './CartContent.css'
import products from '../Shop/ProductList'
import { ShopContext } from '../../context/shop-context'
import {  Modal } from "antd";
import {ShopContextAdidas} from '../../context/Shop-context-adidas'
import { CartItem } from './CartItem'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context'
export default function CartContent() {
  const { user } = useContext(UserContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext,ShopContextAdidas)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate();
  const handleClickCart = () => {
    if (user) {
      navigate('/payment');
    } else {
      Modal.confirm({
        title: '😢 Login to Checkout',
        onOk() {
          navigate('/Login')
        },
        style: { top: '50%', transform: 'translateY(-50%)' },
    });
    }
  }
  let totalPrice = totalAmount.toLocaleString();
  return (
    <div className='cart-content'>
      <div className='cart-page-title'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='CartItems'>
        {products.map((product)  => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      <div className='checkout'>
        <div className='back-to-shopping'>

          <button onClick={() => navigate("/")}>
            {"<  "}
            Continue Shopping </button>
        </div>

        <div className='checkout-content'>
          <div className='subtotal'>
            <p className='subtotal-title'>Subtotal: </p>
            <p className='subtotal-price'>{totalPrice + " VNĐ"}</p>
          </div>

          <div className='nav-btn'>
            <div className='check-out-btn'>
                <button onClick={handleClickCart}> CHECK OUT </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
