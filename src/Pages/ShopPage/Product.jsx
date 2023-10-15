import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import cart icon
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';

export default function Product({ id, imgUrl, name, price }) {

    const { addToCart, cartItems } = useContext(ShopContext);
    const CartItemAmount = cartItems[id];

    return (
        <>
            <div className='product-item col-md-3' key={id}>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src={imgUrl} alt='ShoesImg' />
                    </div>
                    <div className='product-marketplace-infor'>
                        <div className='product-name'>
                            <p className='name'>{name}</p>
                        </div>
                        <div className='product-price'>
                            <span className='price'>{price}</span>
                        </div>
                    </div>
                    <div className='view-product'>

                        <Link to={`/product-detail/${id}`}>
                            <button className='view-btn'>
                                <FontAwesomeIcon icon={faEye} className='eye-view' />
                            </button>
                        </Link>

                    </div>
                    <div className='add-to-cart'>
                        <button className='add-to-cart-btn' onClick={() => addToCart(id)}>
                            <div className='item-icon'>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                            <div className='item-number'>
                                {CartItemAmount > 0 && `${CartItemAmount}`}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
