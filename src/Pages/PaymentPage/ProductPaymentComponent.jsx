import React from 'react'
import './ProductPaymentComponent.css'
export default function ProductPaymentComponent() {
    return (
        <div className='product-infor'>
            <div className='payment-item'>
                <div className='payment-item-img'>
                    <div className='item-img'>
                        <img src='https://cdn.shopify.com/s/files/1/0279/2072/8204/products/IMG_20200405_130836_467_500x500.jpg?v=1586085085' />
                    </div>
                    <div className='item-amount'>
                        <p>1</p>
                    </div>
                </div>

                <div className='payment-item-infor'>
                    <div className='item-infor'>
                        <div className='item-name'>
                            <p>Nike Air Force 1</p>
                        </div>

                    </div>
                    <div className='item-price'>
                        <p>
                            2,700,000 VNĐ
                        </p>
                    </div>
                </div>
            </div>
            <div className='payment-item'>
                <div className='payment-item-img'>
                    <div className='item-img'>
                        <img src='https://cdn.shopify.com/s/files/1/0279/2072/8204/products/IMG_20200405_130836_467_500x500.jpg?v=1586085085' />
                    </div>
                    <div className='item-amount'>
                        <p>1</p>
                    </div>
                </div>

                <div className='payment-item-infor'>
                    <div className='item-infor' scope="row">
                        <div className='item-name'>
                            <p>Nike Air Force 1</p>
                        </div>

                    </div>
                    <div className='item-price'>
                        <p>
                            2,700,000 VNĐ
                        </p>
                    </div>
                </div>
            </div>

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
                                2,700,000 VNĐ
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
                                20,000 VNĐ
                            </p>
                        </div>
                    </div>
                </div>
                <div className='total'>
                    <div className='total-title payment-title'>
                        <p>
                            Total
                        </p>
                    </div>
                    <div className='total-cost'>
                        <p>
                            2,720,000 VNĐ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
