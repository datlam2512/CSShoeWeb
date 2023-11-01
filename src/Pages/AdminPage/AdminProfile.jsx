import React from 'react'
import './Admin.css'
import  { useContext, useState } from "react";
export default function AdminProfile() {
  return (
    <div  className='admin-profile' >
        <div className='admin-content'>
            <h1 className='tittle-admin'>Admin Profile</h1>
            <p className='detail-admin'>Full Name:</p>
            <p className='detail-admin'>Email:</p>
            <p className='detail-admin'>PhoneNumber:</p>
        </div>
    </div>
  )
}
 