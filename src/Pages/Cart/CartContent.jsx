import React from 'react'
import './CartContent.css'
export default function CartContent() {
  function goBack(){
    window.location.href = 'Home.jsx';
  }
  return (
    <div className='text'>
        <h1>Your Cart is Nothing!</h1>
        <button ><a href='./home'>Continue Browsing</a></button>
    </div>
  )
}
