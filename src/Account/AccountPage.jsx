import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";

function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const saveProfile = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/Login");
  }

  return (
    <div className="profile">
      <div><h2 className="profile-title">Profile</h2></div>
      {isEditing ? (
        <div className="profile-update-detail">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={updatedUser.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={updatedUser.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            User Name:
            <input
              type="text"
              name="userName"
              value={updatedUser.userName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={updatedUser.gender}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={updatedUser.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Shipping Address:
            <input
              type="text"
              name="shippingAddress"
              value={updatedUser.shippingAddress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Billing Address:
            <input
              type="text"
              name="billingAddress"
              value={updatedUser.billingAddress}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={saveProfile}>Save</button>
        </div>
      ) : (
        <div className="profile-detail">
          <p>First Name: {user?.firstName}</p>
          <p>Last Name: {user?.lastName}</p>
          <p>User Name: {user?.userName}</p>
          <p>Email: {user?.email}</p>
          <p>Gender: {user?.gender}</p>
          <p>Phone Number: {user?.phoneNumber}</p>
          <p>Shipping Address: {user?.shippingAddress}</p>
          <p>Billing Address: {user?.billingAddress}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
      <div className="logout-button" ><button onClick={handleLogout}>Logout</button></div>
    </div>
  );
}

export default AccountPage;
