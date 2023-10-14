import React, { useContext } from 'react'
import './CartContent.css'
import products from '../ShopPage/ProductList'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CartContent() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  let totalPrice = totalAmount.toLocaleString();
  return (
    <div className='cart-content'>
      <div className='cart-page-title'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='CartItems'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      <div className='checkout'>
        <div className='back-to-shopping'>

          <button onClick={() => navigate("/")}>
            {"<<  "}
            Continue Shopping </button>
        </div>

        <div className='checkout-content'>
          <div className='subtotal'>
            <p className='subtotal-title'>Subtotal: </p>
            <p className='subtotal-price'>{totalPrice + " VNĐ"}</p>
          </div>

          <div className='nav-btn'>
            <div className='check-out-btn'>
              <button> CHECK OUT </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
