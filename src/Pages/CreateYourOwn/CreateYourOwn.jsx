import React from 'react'
import './CreateYourOwn.css'
import { useState } from 'react';

export default function CreateYourOwn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedShoe, setSelectedShoe] = useState(''); // Lựa chọn mặc định

  const shoeOptions = [
    { id: 1, name: 'Sneaker', price: '$50', image: 'sneaker.jpg' },
    { id: 2, name: 'Boots', price: '$80', image: 'boots.jpg' },
    { id: 3, name: 'Sandals', price: '$30', image: 'sandals.jpg' },
  ];

  const handleSelectChange = (e) => {
    setSelectedShoe(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className='create-your-own-page'>
      <div className='create-your-own-container'>
        <div className='create-your-own-title'>
          <h1>
            CREATE YOUR OWN
          </h1>
        </div>
        <div className='form-container'>
          <div className='form-design'>
            <div className='form-title'>
              <h1>
                Create your Own Sneaker
              </h1>
            </div>
            <div className='provide-infor'>
              <div className='provide-name'>
                <label>
                  First Name:
                  <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </label>
                <br />
                <label>
                  Last Name:
                  <input type="text" value={lastName} onChange={handleLastNameChange} />
                </label>


              </div>

              <div className='provide-email'>
                <form >
                  <label>
                    Email:
                    <input
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                    />
                  </label>

                </form>
              </div>

              <div className='provide-select-shoes'>
                <form>
                  <label>
                    Choose a Shoe:
                    <select value={selectedShoe} onChange={handleSelectChange}>
                      <option value="">Select a shoe</option>
                      {shoeOptions.map((shoe) => (
                        <option key={shoe.id} value={shoe.id}>
                          {shoe.name} - {shoe.price}
                        </option>
                      ))}
                    </select>
                  </label>
                </form>

                {selectedShoe && (
                  <div>
                    <img src={shoeOptions[selectedShoe - 1].image} alt={shoeOptions[selectedShoe - 1].name} />
                    <p>Name: {shoeOptions[selectedShoe - 1].name}</p>
                    <p>Price: {shoeOptions[selectedShoe - 1].price}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
