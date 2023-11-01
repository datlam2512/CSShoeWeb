import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user-context";
import "./AccountPage.css";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Hao',
    lastName: 'Phan',
    userName: 'phanhao205',
    email: 'hphann.205@gmail.com.com',
    gender: 'Male',
    phoneNumber: '0354019580',
    shippingAddress: 'hcm',
    billingAddress: 'hcm',
  });

  const { user, setUser } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (field) => {
    setIsEditing(field);
  };

  const handleSave = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
    setIsEditing(false);
  };

  const renderField = (field, label) => (
    <div>
      <strong>{label}:</strong>
      {isEditing === field ? (
        <div>
          <input
            type="text"
            value={userInfo[field]}
            onChange={(e) => setUserInfo({ ...userInfo, [field]: e.target.value })}
          />
          <button onClick={() => handleSave(field, userInfo[field])}>Save</button>
        </div>
      ) : (
        <div>
          {userInfo[field]}
          <button onClick={() => handleEdit(field)}>Edit</button>
        </div>
      )}
    </div>
  );

  const navigate = useNavigate();
  
  const handleLogout = () => {
    setUser(null);
    navigate("/Login");
  }
  return (
    <div className='profile'>
      <h1 className='profile-title'>User Profile</h1>
      {renderField('firstName', 'First Name')}
      {renderField('lastName', 'Last Name')}
      {renderField('userName', 'User Name')}
      {renderField('email', 'Email')}
      {renderField('gender', 'Gender')}
      {renderField('phoneNumber', 'Phone Number')}
      {renderField('shippingAddress', 'Shipping Address')}
      {renderField('billingAddress', 'Billing Address')}
      <div className="logout-button" ><button onClick={handleLogout}>Logout</button></div>
    </div>
  );
};

export default UserProfile;
