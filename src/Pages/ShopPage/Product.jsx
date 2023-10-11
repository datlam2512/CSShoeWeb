import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from '../../context/shop-context'

const Product = ({ id, imgUrl, name, price }) => {
    const { addToCart, cartItems } = useContext(ShopContext)
    const CartItemAmount = cartItems[id]
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
                <div className='add-to-cart'>
                    <button className='add-to-cart-btn' onClick={() => addToCart(id)} >
                    Add to Cart {CartItemAmount > 0 && <>({CartItemAmount})</>}</button>
                </div>
            </div>
        </div>
    );
};

export default Product; 