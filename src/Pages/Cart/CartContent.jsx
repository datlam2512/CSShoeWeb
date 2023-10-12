import React, {useContext} from 'react'
import products from '../ShopPage/ProductList'
import { ShopContext } from '../../context/shop-context'
import {CartItem} from './CartItem'
import { useNavigate } from 'react-router-dom'

export default function CartContent() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className='CartItems'>
          {products.map((product) => {
             if(cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
             }
        })}
        </div>

        <div className='checkout'>
          <p>Subtotal: {totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
    </div>  
  )
}
