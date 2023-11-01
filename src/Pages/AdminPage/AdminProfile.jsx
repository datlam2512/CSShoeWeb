import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user-context";
import './Admin.css'
import '../../'
export default function AdminProfile() {
    const { user, setUser } = useContext(UserContext);
  let displayGender = user && user.Gender === "M" ? "Male" : "Female";  
  return (
    <div  className='admin-profile' >
        <div className='admin-content'>
            <h1 className='tittle-admin'>Admin Profile</h1>
            <p className='detail-admin'>Full Name: {user?.FirstName}, {user?.LastName}</p>
            <p className='detail-admin'>Email:</p>
            <p className='detail-admin'>PhoneNumber:</p>
        </div>
    </div>
  )
}
 