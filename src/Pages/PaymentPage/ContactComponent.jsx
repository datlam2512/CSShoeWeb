import React, { useState } from 'react';
import vietnamCities from './vietnamCities ';
import './ContactComponent.css';
import { Link } from 'react-router-dom';

export default function ContactComponent() {
    const [phone, setPhone] = useState("+84");
    const [email, setEmail] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [district, setDistrict] = useState("");
    const [apartment, setApartment] = useState("");

    const [isEmailValid, setEmailValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);

    const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
    const [isLastNameEmpty, setLastNameEmpty] = useState(false);
    const [isDistrictEmpty, setDistrictEmpty] = useState(false);
    const [isApartmentEmpty, setApartmentEmpty] = useState(false);
    const [isCityEmpty, setSelectedCityEmpty] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setPhoneValid(/^\+\d{11,12}$/.test(value));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const hasError = validateFields();
        if (!hasError) {

        }
    };

    const validateFields = () => {
        let hasError = false;

        if (email === "") {
            setEmailValid(false);
            hasError = true;
        }

        if (phone === "" || !/^\+\d{11,12}$/.test(phone)) {
            setPhoneValid(false);
            hasError = true;
        }

        if (selectedCity === "") {
            setSelectedCityEmpty(true);
            hasError = true;
        }

        if (firstName === "" || !/^[a-zA-Z]+$/i.test(firstName)) {
            setFirstNameEmpty(true);
            hasError = true;
        }

        if (lastName === "" || !/^[a-zA-Z]+$/i.test(lastName)) {
            setLastNameEmpty(true);
            hasError = true;
        }

        if (district === "" || apartment === "") {
            setDistrictEmpty(true);
            setApartmentEmpty(true);
            hasError = true;
        }

        return hasError;
    };

    return (
        <div className='contact-infor'>
            <div className='contact'>
                <h1>Contact</h1>
                <div className={`email padding-form ${!isEmailValid ? "error" : ""}`}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {!isEmailValid && <div className="error-message">Invalid email format</div>}
                </div>
                <div className={`phone-number padding-form ${!isPhoneValid ? "error" : ""}`}>
                    <div className="phone-input">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        {!isPhoneValid && <div className="error-message">Invalid phone number</div>}
                    </div>
                </div>
            </div>
            <div className='shipping-address'>
                <h1>Shipping Address</h1>
                <div className='consignee-name padding-form'>
                    <div className='first-name'>
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`${isFirstNameEmpty ? "error" : ""}`}
                        />
                        {isFirstNameEmpty && <div className="error-message">First Name is required</div>}
                    </div>
                    <div className='last-name'>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`${isLastNameEmpty ? "error" : ""}`}
                        />
                        {isLastNameEmpty && <div className="error-message">Last Name is required</div>}
                    </div>
                </div>
                <div className='address'>
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
                        {isCityEmpty && <div className="error-message">Please select a city</div>}
                    </div>
                    <div className={`district padding-form ${isDistrictEmpty ? "error" : ""}`}>
                        <input
                            type="text"
                            placeholder="District"
                        />
                        {isDistrictEmpty && <div className="error-message">District is required</div>}
                    </div>
                    <div className={`apartment padding-form ${isApartmentEmpty ? "error" : ""}`}>
                        <input
                            type="text"
                            placeholder="Apartment"
                        />
                        {isApartmentEmpty && <div className="error-message">Apartment is required</div>}
                    </div>
                </div>
            </div>

            <div className='data-footer'>
                <div className='return-to-infor'>
                    <Link to='/CartContent'>
                        <button type='submit' className='return-btn'>
                            {"< "} Return to information
                        </button>
                    </Link>

                </div>

                <div className='submit-btn'>
                    <button type="submit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    );
}
