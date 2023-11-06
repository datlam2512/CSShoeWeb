import React, { useContext, useEffect, useState } from 'react';
import './ProductPaymentComponent.css';
import { ShopContext } from '../../context/shop-context';
import PaymentItem from './PaymentItem';
import API from '../../config/api';

export default function ProductPaymentComponent() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [listShoe, setListShoe] = useState([]); // Initialize as an empty array

  let subtotalPrice = totalAmount.toLocaleString();
  const deli_cost = 20000;
  let shipping = deli_cost.toLocaleString();
  const totalPrice = totalAmount + deli_cost;
  let total = totalPrice.toLocaleString();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await API.getListProduct();
        setListShoe(response.data); 
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <div className='product-infor'>
      {listShoe.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <PaymentItem data={product} key={product.id} />;
        }
      })}

      <div className='payment-cost'>
        <div className='sub-cost'>
          <div className='subtotal-payment'>
            <div className='subtotal-title payment-title'>
              <p>Subtotal</p>
            </div>
            <div className='subtotal-cost'>
              <p>{subtotalPrice + ' VNĐ'}</p>
            </div>
          </div>
          <div className='shipping-payment'>
            <div className='shipping-title payment-title'>
              <p>Shipping</p>
            </div>
            <div className='shipping-cost'>
              <p>{shipping + ' VNĐ'}</p>
            </div>
          </div>
        </div>
        <div className='total'>
          <div className='total-title payment-title'>
            <p>Total</p>
          </div>
          <div className='total-cost'>
            <p>{total + ' VNĐ'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
