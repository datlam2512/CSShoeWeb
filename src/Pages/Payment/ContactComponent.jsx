import React, { useState, useContext } from "react";
import vietnamCities from "./vietnamCities ";
import "./ContactComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { image_qr } from "../../config/qrImage";
import { ShopContext } from "../../context/shop-context";
import API from "../../config/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function ContactComponent() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [products, setProducts] = useState([]);

  const { cartItems,addToCart, removeFromCart, updateCartItemcount, selectedSize,removeAll, getTotalCartAmount } = useContext(
    ShopContext,
  );
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [district, setDistrict] = useState("");
  const [apartment, setApartment] = useState("");
  const navigate = useNavigate();

  const [isEmailValid, setEmailValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);
  // console.log(cartItems);
  const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setLastNameEmpty] = useState(false);
  const [isDistrictEmpty, setDistrictEmpty] = useState(false);
  const [isApartmentEmpty, setApartmentEmpty] = useState(false);
  const [isCityEmpty, setSelectedCityEmpty] = useState(false);
  const [error, setError] = useState(true);
  const showModal = false;

  useEffect(() => {
    const getListShoes = async () => {
      try {
        const res = await API.getListProduct();
        setProducts(res.data);
      } catch (err) {}
    };
    getListShoes();
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    // console.log(value.length);
    if (value.length < 10 || value.length > 11 || value % 1 !== 0) {
      setPhoneValid(false);
    } else setPhoneValid(true);
  };
  const showOrderCartAlert = () => {
    Swal.fire({
      title: "Order Successfully",
      icon: "success",
      bordered: "none",
    });
  };

  const showOrderFailCartAlert = () => {
    Swal.fire({
      title: "Order Failed",
      icon: "error",
      bordered: "none",
    });
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const hasError = validateFields();
  };

  const handleConfirm = async (e) => {
    setError(true);
    // e.preventDefault();
    let shoes = [];
    products.map((product) => {
      if (cartItems[product.id] !== 0) {
        shoes.push({
          shoeId: product.id,
          quantityShoes: cartItems[product.id],
        });
      }
    });
    const hasError = validateFields();
    const data = {
      email: email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
      city: selectedCity,
      district: district,
      apartment: apartment,
      payment_status: "0",
      shipping_status: "0",
      shoe: shoes,
    };
    if (!hasError && window.confirm("Confirm payment")) {
        if(shoes.length ===0)
        {
            showOrderFailCartAlert();
            return;
        }
      try {
        const res = await API.createOrder(data, currentUser.token);
        console.log(res.data);
        shoes.map((shoe) => {
            if (shoe[shoe.shoeId] !== 0) {
                removeAll(shoe.shoeId)
            }
        })
        showOrderCartAlert();
        navigate("/shop")
        
      } catch (err) {
        console.log(err);
        
        showOrderFailCartAlert()
      }
    }
  };

  const handleFirstNameChange = (e) => {
    e.preventDefault(e.target.value);
    setFirstName(e.target.value);
    if (e.target.value !== "") {
      setFirstNameEmpty(false);
    } else setFirstNameEmpty(true);
  };

  const handleLastNameChange = (e) => {
    e.preventDefault(e.target.value);
    setLastName(e.target.value);
    if (e.target.value !== "") {
      setLastNameEmpty(false);
    } else setLastNameEmpty(true);
  };

  const handleDistrictChange = (e) => {
    e.preventDefault(e.target.value);
    setDistrict(e.target.value);
    if (e.target.value !== "") {
      setDistrictEmpty(false);
    } else setDistrictEmpty(true);
  };

  const handelApartmentChange = (e) => {
    e.preventDefault(e.target.value);
    setApartment(e.target.value);
    if (e.target.value !== "") {
      setApartmentEmpty(false);
    } else setApartmentEmpty(true);
  };

  const validateFields = () => {
    let hasError = false;

    if (email === "") {
      setEmailValid(false);
      hasError = true;
    }

    if (
      phone === "" ||
      phone.length < 10 ||
      phone.length > 11 ||
      phone % 1 !== 0
    ) {
      console.log(phone.length);
      setPhoneValid(true);
      hasError = true;
    }

    if (selectedCity === "") {
      setSelectedCityEmpty(true);
      hasError = true;
    }

    if (firstName === "") {
      setFirstNameEmpty(true);
      hasError = true;
    }

    if (lastName === "") {
      setLastNameEmpty(true);
      hasError = true;
    }

    if (district === "") {
      setDistrictEmpty(true);
      hasError = true;
    }

    if (apartment === "") {
      setApartmentEmpty(true);
      hasError = true;
    }
    setError(hasError);

    return hasError;
  };

  return (
    <div className="contact-infor">
      <div className="contact">
        <h1>Contact</h1>
        <div className={`email padding-form ${!isEmailValid ? "error" : ""}`}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && (
            <div className="error-message">Invalid email format</div>
          )}
        </div>
        <div
          className={`phone-number padding-form ${
            !isPhoneValid ? "error" : ""
          }`}
        >
          <div className="phone-input">
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
            />
            {!isPhoneValid && (
              <div className="error-message">Invalid phone number</div>
            )}
          </div>
        </div>
      </div>
      <div className="shipping-address">
        <h1>Shipping Address</h1>
        <div className="consignee-name padding-form">
          <div className="first-name">
            <input
              type="text"
              placeholder="First Name"
              className={`${isFirstNameEmpty ? "error" : ""}`}
              onChange={handleFirstNameChange}
            />
            {isFirstNameEmpty && (
              <div className="error-message">First Name is required</div>
            )}
          </div>
          <div className="last-name">
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastNameChange}
              className={`${isLastNameEmpty ? "error" : ""}`}
            />
            {isLastNameEmpty && (
              <div className="error-message">Last Name is required</div>
            )}
          </div>
        </div>
        <div className="address">
          <div className={`city padding-form ${isCityEmpty ? "error" : ""}`}>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select a City</option>
              {vietnamCities.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
            {selectedCity === "Select a City" && (
              <div className="error-message">Please select a city</div>
            )}
          </div>
          <div
            className={`district padding-form ${
              isDistrictEmpty ? "error" : ""
            }`}
          >
            <input
              type="text"
              onChange={handleDistrictChange}
              placeholder="District"
            />
            {isDistrictEmpty && (
              <div className="error-message">District is required</div>
            )}
          </div>
          <div
            className={`apartment padding-form ${
              isApartmentEmpty ? "error" : ""
            }`}
          >
            <input
              type="text"
              onChange={handelApartmentChange}
              placeholder="Apartment"
            />
            {isApartmentEmpty && (
              <div className="error-message">Apartment is required</div>
            )}
          </div>
        </div>
      </div>

      <div className="data-footer">
        <div className="return-to-infor">
          <Link to="/CartContent">
            <button type="submit" className="return-btn">
              {"< "} Return to information
            </button>
          </Link>
        </div>

        <div className="submit-btn">
          <button
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleFormSubmit}
          >
            Submit
            {/* {console.log(error)} */}
          </button>
        </div>
      </div>
      <div
        style={
          error ? { display: "none", visibility: "hidden", height: 0 } : {}
        }
      >
        <div
          class="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog d-flex align-items-center justify-content-center">
            <div class="modal-content d-flex align-items-center justify-content-center">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Vui lòng thanh toán
                </h5>
                <button
                  type="button"
                  onClick={() => {
                    setError(true);
                  }}
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <img src={image_qr.baseURL} alt="" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning btn btn-outline-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setError(true);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn btn-outline-success"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setError(true);
                    handleConfirm(); // Gọi hàm handleConfirm sau khi setError
                  }}
                >
                  Payment confirmed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {!{} ? (
        <div
          class="modal-backdrop fade show"
          style={{ display: "block" }}
        ></div>
      ) : (
        ""
      )} */}
    </div>
  );
}
