import React from 'react'
import './ProductMarketPlace.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"
export default function ProductMarketPlace() {
    return (
        <div className='row'>
            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://cdn.shopify.com/s/files/1/0279/2072/8204/products/il_794xN.2149448336_bufd_500x500.jpg?v=1584529347' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                        <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/IMG_20200807_145448_164_720x.jpg?v=1600536703' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/IMG_20200919_141936_645_720x.jpg?v=1600536201' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/87693252-1405573562957441-7266325153131426733-n_480x.jpg?v=1583658925' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/uzTCKhLLRaeY6y6lSbhamg_150x150.jpg?v=1587205747' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/il_794xN.2241817059_8b2r_720x.jpg?v=1584858198' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>

            <div className='product-item col-md-3' >
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='https://www.customsneaker.nl/cdn/shop/products/IMG_20200319_120648_606_480x.jpg?v=1584885619' alt='ShoesImg' />
                    </div>
                    <div className='product-infor'>
                        <div className='product-name'>
                            <p className='name'>NIKE AIR FORCE 1</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>2.7000.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
