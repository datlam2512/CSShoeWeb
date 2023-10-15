import React from 'react'
import { useState } from 'react';
import vietnamCities from './vietnamCities ';
import './ContactComponent.css'

export default function ContactComponent() {
    const [phone, setPhone] = useState("+84");
    const [email, setEmail] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    return (
        <div className='contact-infor'>
            <div className='contact'>
                <h1>
                    Contact
                </h1>
                <div className='email padding-form'>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='phone-number padding-form'>
                    <div className="phone-input">
                        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
            </div>


            <div className='shipping-address'>
                <h1>
                    Shipping Address
                </h1>
                <div className='consignee-name padding-form'>
                    <div className='first-name'>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className='last-name'>
                        <input type="text" placeholder="Last Name" />
                    </div>
                </div>

                <div className='address'>
                    <div className='city padding-form'>
                        <select id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                            <option value="">Select a City</option>
                            {vietnamCities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='district padding-form'>
                        <input type="text" placeholder="District" />
                    </div>
                    <div className='apartment padding-form'>
                        <input type="text" placeholder="Apartment" />
                    </div>
                </div>
            </div>
        </div>
    )
}
