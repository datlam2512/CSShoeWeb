import React from 'react'
import './CartContent.css'
import { Link } from 'react-router-dom';
export default function CartContent() {
  function goBack(){
    window.location.href = 'Home.jsx';
  }
  return (
    <div className='text'>
        <h1>Your Cart is Nothing!</h1>
        <Link to={'/'} ><button >Continute Shopping</button></Link>
    </div>
  )
}
