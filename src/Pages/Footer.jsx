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
               <div className='column col-2'>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href=''>Account</a></li>
                        <li><a href=''>Search</a></li>
                    </ul>
                </nav>
               </div>
               <div className='column col-4 service'>
                <h1>Our Service</h1>
                <nav>
                    <ul>
                        <li><a href=''>Q&A</a></li>
                        <li><a href=''>Shipment</a></li>
                        <li><a href=''>Return Policy</a></li>
                        <li><a href=''>Payment detail</a></li>
                    </ul>
                </nav>
               </div>
               <div className='column col-4'>
               <h1>CS Shoes</h1>
                <nav>
                    <ul>
                        <li><a href=''>About Us</a></li>
                        <li><a href=''>Privacy Policy</a></li>
                        <li><a href=''>Terms and Conditions</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </nav>
               </div>
               <div className='column col-2 Contact'>
                <p>Folllow us</p>
                <a href=''><FontAwesomeIcon icon={faInstagram} /></a>
                <a href=''><FontAwesomeIcon icon={faTiktok} /></a>      
                <a href=''><FontAwesomeIcon icon={faFacebook} /></a>
               </div>
            </div>
          </div> 
          </div>
    </div>
  )
}
