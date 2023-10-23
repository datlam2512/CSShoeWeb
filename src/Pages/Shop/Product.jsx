import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons"; // Import cart icon
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { ConfigProvider, InputNumber } from "antd";
import Swal from "sweetalert2";

export default function Product({ id, imgUrl, name, price }) {
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
    <>
      <div className="product-item col-md-3" key={id}>
        <div className="product-card">
          <div className="product-img">
            <img src={imgUrl} alt="ShoesImg" />
          </div>
          <div className="product-marketplace-infor">
            <div className="product-name">
              <p className="name">{name}</p>
            </div>
            <div className="product-price">
              <span className="price">{price}</span>
            </div>
          </div>
          <div className="view-product">
            <Link to={`/product-detail/${id}`}>
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
      </div>
      {isPopupOpen && (
        <div className="popup">
          <button className="close-popup" onClick={closePopup}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <div className="popup-infor">
            <div className="popup-img">
              <img src={imgUrl} alt={name} />
            </div>
            <div className="popup-name">
              <h2>{name}</h2>
            </div>
            <form className="popup-size-quantity">
              <div className="select-size">
                <label
                  htmlFor="lable-size"
                  style={{ fontFamily: "Karla, sans-serif" }}
                >
                  Size:
                </label>
                <br />
                <select
                  id="option-size"
                  style={{ fontFamily: "Karla, sans-serif" }}
                  name="lable-size"
                >
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                </select>
              </div>
              <div className="line"></div>
              <div className="select-quantity">
                <label
                  htmlFor="quantity"
                  style={{ fontFamily: "Karla, sans-serif" }}
                >
                  Quantity:
                </label>
                <div className="control-quantity">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorBgContainer: "#fff",
                        fontFamily: "Karla, sans-serif",
                        fontSize: 16,
                      },
                      components: {
                        InputNumber: {
                          activeBorderColor: "black",
                          hoverBorderColor: "black",
                          controlWidth: "98%",
                          controlHeight: "48",
                          handleBorderColor: "none",
                          handleFontSize: 16,
                          handleBg: "#e9e9e9",
                        },
                      },
                    }}
                  >
                    <InputNumber
                      bordered={true}
                      min={1}
                      max={99}
                      value={selectedQuantity}
                      onChange={setSelectedQuantity}
                    />
                  </ConfigProvider>
                </div>
              </div>
            </form>
          </div>

          <div className="purchase-action">
            <div className="addCartBtn">
              <button
                className="popup-add-to-cart"
                type="submit"
                onClick={() => {
                  addToCart(id, selectedQuantity);
                  showAddToCartAlert();
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
