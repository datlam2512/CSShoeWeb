import React, { useContext, useState } from 'react';
import './ProductDetailComponent.css';
import { ConfigProvider, Image, InputNumber } from 'antd';
import { Link, useParams } from 'react-router-dom';
import products from '../ShopPage/ProductList';
import { ShopContext } from '../../context/shop-context';

export default function ProductDetailComponent() {
    const { addToCart, cartItems } = useContext(ShopContext);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const shoesName = useParams();
    const shoes = products.find((obj) => {
        return obj.id == shoesName.id;
    });

    const showAddToCartAlert = () => {
        window.alert('Added to cart successfully');
    };

    return (
        <div className='container'>
            <div className='product-detail'>
                <div className='product-image'>
                    <Image width={468} src={shoes.imgUrl} />
                </div>

                <div className='product-infor'>
                    <div className='width-product-infor'>
                        <div className='productSingle'>
                            <div className='productName'>{shoes.name}</div>
                            <div className='productPrice'>{shoes.price.toLocaleString() + ' VNĐ'}</div>
                        </div>

                        <form className='payment-form'>
                            <div className='size-selector'>
                                <label htmlFor='size' style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Size:
                                </label>
                                <br />
                                <select id='size' style={{ fontFamily: 'Karla, sans-serif' }} name='size'>
                                    <option value='33'>33</option>
                                    <option value='34'>34</option>
                                    <option value='35'>35</option>
                                    <option value='36'>36</option>
                                    <option value='37'>37</option>
                                    <option value='38'>38</option>
                                    <option value='39'>39</option>
                                    <option value='40'>40</option>
                                    <option value='41'>41</option>
                                    <option value='42'>42</option>
                                    <option value='43'>43</option>
                                    <option value='44'>44</option>
                                    <option value='45'>45</option>
                                    <option value='46'>46</option>
                                </select>
                            </div>
                            <div className='line'></div>
                            <div className='quantity-selector'>
                                <label htmlFor='quantity' style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Quantity:
                                </label>
                                <div className='quantity-control'>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                fontFamily: 'Karla, sans-serif',
                                                fontSize: 16,
                                            },
                                            components: {
                                                InputNumber: {
                                                    activeBorderColor: 'black',
                                                    hoverBorderColor: 'black',
                                                    controlWidth: '80%',
                                                    controlHeight: '48',
                                                    handleBorderColor: 'black',
                                                    handleFontSize: 16,
                                                },
                                            },
                                        }}
                                    >
                                        <InputNumber
                                            bordered={false}
                                            min={1}
                                            max={99}
                                            value={selectedQuantity}
                                            onChange={setSelectedQuantity}
                                        />
                                    </ConfigProvider>
                                </div>
                            </div>
                        </form>

                        <div className='purchase-action'>
                            <div className='addCartBtn'>
                                <button
                                    className='add-to-cart-button'
                                    type='submit'
                                    onClick={() => {
                                        addToCart(shoes.id, selectedQuantity); 
                                        showAddToCartAlert(); 
                                    }}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                            <div className='buyNowBtn'>
                                <Link to='/payment'>
                                    <button className='buy-button' type='submit'>
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
