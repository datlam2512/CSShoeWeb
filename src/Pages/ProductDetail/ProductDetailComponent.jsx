import React, { useContext, useState, useEffect } from 'react';
import './ProductDetailComponent.css';
import { ConfigProvider, Image, InputNumber } from 'antd';
import { Link, useParams } from 'react-router-dom';
import products from '../Shop/ProductList';
import { ShopContext } from '../../context/shop-context';
import Swal from 'sweetalert2';

export default function ProductDetailComponent() {
    const { addToCart, cartItems, selectSize } = useContext(ShopContext);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('33'); // Default size
    const [shoes, setShoes] = useState(null);

    const shoesName = useParams();

    useEffect(() => {
        const selectedShoes = products.find((obj) => obj.id == shoesName.id);
        setShoes(selectedShoes);
    }, [shoesName.id]);

    const showAddToCartAlert = () => {
        Swal.fire({
            title: 'Added To Cart Successfully',
            icon: 'success',
            bordered: "none"
        });
    };

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSelectedSize(newSize);
        selectSize(newSize);
    };

    return (
        <div className='container'>
            {shoes ? (
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
                                    <select
                                        id='size'
                                        name='size'
                                        value={selectedSize}
                                        onChange={handleSizeChange}
                                        style={{ fontFamily: 'Karla, sans-serif' }}
                                    >
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
                                                bordered={true}
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
                                            addToCart(shoes.id, selectedQuantity, selectedSize);
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
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
