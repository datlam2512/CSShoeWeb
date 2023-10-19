/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function () {
    
  return (
    <div className='Footer'>
       <div className='First-Color'>
          <div className='container'>
            <div className='row'>
               <div className='column col-2 service'>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href=''>Account</a></li>
                        <li><a href='/search/:query'>Search</a></li>
                    </ul>
               </div>
               <div className='column col-4 service'>
                <h1>Our Service</h1>
                    <ul>
                        <li><a href='/question-anwser'>Q&A</a></li>
                        <li><a href='/shipment'>Shipment</a></li>
                        <li><a href='/return-policy'>Return Policy</a></li>
                        <li><a href='/payment-detail'>Payment detail</a></li>
                    </ul>
               </div>
               <div className='column col-4 service'>
               <h1>CS Shoes</h1>
                    <ul>
                        <li><a href='/about'>About Us</a></li>
                        <li><a href='/privacy-policy'>Privacy Policy</a></li>
                        <li><a href='/term-and-conditions'>Terms and Conditions</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
               </div>
               <div className='column col-2 Contact-Footer'>
                <p className='follow-us'>Folllow us</p>
                <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://www.tiktok.com/explore' target='_blank'><FontAwesomeIcon icon={faTiktok} /></a>      
                <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
               </div>
            </div>
          </div> 
          </div>
          </div>
  )
}
