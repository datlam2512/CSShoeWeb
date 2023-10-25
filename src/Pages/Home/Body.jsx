/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from "react";
import "./Body.css";
import { ShopContext } from "../../context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons"; // Import cart icon
import { Button, Card } from "antd";
import products from "../Shop/ProductList";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ConfigProvider, InputNumber } from "antd";
import { Avatar, List, Radio, Space } from "antd";
export default function Body({ id, imgUrl, name, price }) {
  const { Meta } = Card;
  const [product, setProduct] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);
  const CartItemAmount = cartItems[id];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedQuantity(1);
  };
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const showAddToCartAlert = () => {
    Swal.fire({
      title: "Added To Cart Successfully",
      icon: "success",
      bordered: "none",
    });
  };

  return (
    <div className="Body">
      <div className="item-gif">
        <div className="View-items">
       <img src="https://freight.cargo.site/t/original/i/7c0a4f653ed5af639178b90252da9974c131e75855ee41b142832fc0ccb53cdb/004_Driving_Jimmy_Simpson.gif"/>
       <div className="view-product">
              <Link to='/shop'>
                <button className="view-btn">
                 <p>View All</p>
                </button>
              </Link>
            </div>
      </div>
      </div>
      <div className="home-content">
        <div className="content-shoe">
          <img src="/Img/img-content.png" />
          <div className="information-home">
            <h2>Do you recognize that?</h2>
            <p>
              You're looking for new sneakers. Nowhere can you find that
              particular pair that you've been thinking about for a long time,
              until you finally find them after a long search. You decide to buy
              the sneakers, but suddenly Everyone else has the same sneakers.
            </p>
            <p>
              By CsShoe walk around on sneakers that nobody else has. That's
              exactly what you want, right?
            </p>
            <p>
              CsShoe sells a wide range of custom sneakers. There's something
              for everyone, even if you want your own design.
            </p>
            <h4>Possibilities:</h4>
            <p className="list-info">Pick from existing designs</p>
            <p className="list-info">
              Pick from existing designs on a different sneaker
            </p>
            <p className="list-info">Send your own design</p>
            <p className="list-info">To work together towards a design</p>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        {products.slice(0, 4).map((product) => (
         <div className="product-card-shoes">
         <div className="product-card-nav">
            <div className="product-img">
              <img src={product.imgUrl} alt="ShoesImg" />
            </div>
            <div className="product-marketplace-infor">
              <div className="product-name">
                <p className="name">{product.name}</p>
              </div>
              <div className="product-price">
                <span className="price">{product.price}</span>
              </div>
            </div>
            <div className="view-product">
              <Link to={`/product-detail/${product.id}`}>
                <button className="view-btn">
                  <FontAwesomeIcon icon={faEye} className="eye-view" />
                </button>
              </Link>
            </div>
            <div className="add-to-cart">
             
            </div>
          </div>    
          </div>  
        ))}          
      </div>
    </div>
  );
}

