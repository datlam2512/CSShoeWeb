import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Product = ({ id, imgUrl, name, price }) => {
    return (
        <div className='product-item col-md-3' key={id}>
            <div className='product-card'>
                <div className='product-img'>
                    <img src={imgUrl} alt='ShoesImg' />
                </div>
                <div className='product-infor'>
                    <div className='product-name'>
                        <p className='name'>{name}</p>
                    </div>
                    <div className='product-price'>
                        <span className='price'>{price}</span>
                    </div>
                </div>
                <div className='view-product'>
                    <button className='view-btn'> <FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product; 