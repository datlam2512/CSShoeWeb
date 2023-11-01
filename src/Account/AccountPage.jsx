import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";

function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  let displayGender = user && user.Gender === "M" ? "Male" : "Female";  
  return (
    <div className="account-page">
      <div className="history-purchasing">
        <h2>History Purchasing</h2>
        {/* De order history */}
      </div>
      <div className="profile-section">
        <h2>Profile</h2>
        <p>{user?.Username}</p>
        <p>{user?.Email}</p>
        <p>{user?.FirstName}, {user?.LastName}</p>
        <p>{displayGender}</p>
        <p>{user?.PhoneNumber}</p>
        <p>{user?.ShippingAddress}</p>
        <Link to="/Account-detail" style={{textDecoration:'underline'}}>Change Profile </Link>
      </div>
    </div>
  );
}

export default AccountPage;
