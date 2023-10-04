import React from 'react'
import {  Link} from 'react-router-dom';
import './HomePages/Header.css'
export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Container'>
                <div className='row'>
                    <div className='col-2 Logo'>
                        <img src='/Img/Logo.png' />
                    </div>
                    <div className='col-7 Navigation'>
                        <nav>
                            <ul className='menu'>
                                <div className='navmenu'>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/createyourown'>Create Your Own</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><Link to='/sizeguide'>Size Guide</Link></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-3 OtherHead'>
                        <form className='Search'>
                            <input type='text' placeholder="" />
                            <button type="submit"><a><i class="fa fa-search"
                                aria-hidden="true"></i></a></button>
                        </form>
                        <button className='shopping-cart' type="submit"><Link to='/shopping-cart'><i class="fa fa-shopping-cart " aria-hidden="true"></i></Link></button>
                        <button className='Login' type="submit"> <Link to='/Login'><i class="fa fa-user-circle-o" aria-hidden="true"></i></Link></button>
                    </div>
                </div>
            </div></div>
    )
}
