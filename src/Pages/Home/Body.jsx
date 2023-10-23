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
      <div className="View-items">
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link to={"/nike"} style={{ textDecoration: "none" }}>
            <h1>Nike</h1>
            <p></p>
            <img src="/Img/content1.png" />
          </Link>
        </Card>
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link to={"/adidas"} style={{ textDecoration: "none" }}>
            <h1>Adidas</h1>
            <p></p>
            <img src="/Img/content3.png" />
          </Link>
        </Card>
        <Card
          className="card-home"
          style={{ width: 370, height: 400, textAlign: "center", border: 0 }}
        >
          <Link
            to={"/converse"}
            className="converse"
            style={{ textDecoration: "none" }}
          >
            <h1>Converse</h1>
            <p></p>
            <img src="/Img/contentconverse.jpg" />
          </Link>
        </Card>
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
          <div className="product-card">
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
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  openPopup();
                }}
              >
                <div className="item-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className="item-number">
                  {CartItemAmount > 0 && `${CartItemAmount}`}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
