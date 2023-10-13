import React, { useContext } from 'react'
import './CartContent.css'
import { ShopContext } from '../../context/shop-context'
import { useNavigate } from 'react-router'
export default function CartContent() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='text'>
        <h1>Your Cart is Nothing!</h1>
        <button ><a href='./home'>Continue Browsing</a></button>
    </div>
  )
}
