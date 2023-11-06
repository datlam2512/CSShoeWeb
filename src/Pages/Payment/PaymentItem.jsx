import React from 'react'
import { ShopContext } from "../../context/shop-context";
import { useContext } from 'react';

export default function PaymentItem(props) {
    const { id, urlImg, name, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemcount } = useContext(ShopContext)

    const priceOfItem = (cartItems[id] * price).toLocaleString();

    return (
        <div className='payment-item'>
            <div className='payment-item-img'>
                <div className='item-img'>
                    <img src={urlImg} />
                </div>
                <div className='item-amount'>
                    <p onChange={(e) => updateCartItemcount(Number(e.target.value), id)}>{cartItems[id]} </p>
                </div>
            </div>

            <div className='payment-item-infor'>
                <div className='item-infor' scope="row">
                    <div className='item-name'>
                        <p>{name}</p>
                    </div>

                </div>
                <div className='item-price'>
                    <p>
                        {priceOfItem}
                    </p>
                </div>
            </div>
        </div>
    )
}
