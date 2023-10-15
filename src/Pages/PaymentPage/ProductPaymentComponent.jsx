import React, { useContext } from 'react'
import './ProductPaymentComponent.css'
import products from '../ShopPage/ProductList'
import { ShopContext } from '../../context/shop-context'
import PaymentItem from './PaymentItem'

export default function ProductPaymentComponent() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    let subtotalPrice = totalAmount.toLocaleString();
    const deli_cost = 20000;
    let shipping = deli_cost.toLocaleString();
    let totalPrice = subtotalPrice + shipping;

    return (
        <div className='product-infor'>
            {products.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <PaymentItem data={product} />
                }
            })}


            <div className='payment-cost'>
                <div className='sub-cost'>
                    <div className='subtotal-payment'>
                        <div className='subtotal-title payment-title'>
                            <p>
                                Subtotal
                            </p>
                        </div>
                        <div className='subtotal-cost'>
                            <p>
                            {subtotalPrice + " VNĐ"}
                            </p>
                        </div>
                    </div>
                    <div className='shipping-payment'>
                        <div className='shipping-title payment-title'>
                            <p>
                                Shipping
                            </p>
                        </div>
                        <div className='shipping-cost'>
                            <p>
                                {shipping + " VNĐ"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='total'>
                    <div className='total-title payment-title'>
                        <p>
                            {}
                        </p>
                    </div>
                    <div className='total-cost'>
                        <p>
                        {totalPrice + " VNĐ"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
