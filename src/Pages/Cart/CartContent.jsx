import React, { useContext, useEffect, useState } from 'react';
import './CartContent.css';
import { ShopContext } from '../../context/shop-context';
import { Modal } from 'antd';
import API from '../../config/api';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import { useSelector } from 'react-redux';

export default function CartContent() {
  const { user } = useContext(UserContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [listShoe, setListShoe] = useState([]); // Initialize as an empty array

  const handleClickCart = () => {
    if (currentUser.token) {
      navigate('/payment');
    } else {
      Modal.confirm({
        title: '😢 Login to Checkout',
        onOk() {
          navigate('/Login');
        },
        style: { top: '50%', transform: 'translateY(-50%)' },
      });
    }
  }

  useEffect(() => {
    // Fetch the list of products from the API
    const fetchProductList = async () => {
      try {
        const response = await API.getListProduct();
        setListShoe(response.data); // Update the state with the retrieved product list
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchProductList();
  }, []); // Run the fetchProductList function on component mount

  let totalPrice = totalAmount.toLocaleString();

  return (
    <div className="cart-content">
      <div className="cart-page-title">
        <h1>Shopping Cart</h1>
      </div>
      <div className="CartItems">
        {listShoe.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      <div className="checkout">
        <div className="back-to-shopping">
          <button onClick={() => navigate("/")}>
            {"<  "}
            Continue Shopping
          </button>
        </div>

        <div className="checkout-content">
          <div className="subtotal">
            <p className="subtotal-title">Subtotal: </p>
            <p className="subtotal-price">{totalPrice + " VNĐ"}</p>
          </div>

          <div className="nav-btn">
            <div className="check-out-btn">
              <button onClick={handleClickCart}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
