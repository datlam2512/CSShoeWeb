import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../Shop/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { ConfigProvider, InputNumber } from 'antd';
import Swal from 'sweetalert2';

function SearchResult() {
  const { query } = useParams();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const { addToCart, cartItems } = useContext(ShopContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});


  const openPopup = (imgUrl, name, id) => {
    setSelectedProduct({ imgUrl, name, id });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedQuantity(1);
  };
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const showAddToCartAlert = () => {
    Swal.fire({
      title: 'Added To Cart Successfully',
      icon: 'success',
    });
  };

  return (
    <div>
      <div className='marketplace-container'>
        <div className='main-content'>

          <div className='product'>
            <h1>SEARCH RESULTS</h1>

            <div className='row'>

              {results.length > 0 ? (
                results.map(product => (
                  <div className='product-item col-md-2' key={product.id}>
                    <div className='product-card'>
                      <div className='product-img'>
                        <img src={product.imgUrl} alt='ShoesImg' />
                      </div>
                      <div className='product-marketplace-infor'>
                        <div className='product-name'>
                          <p className='name'>{product.name}</p>
                        </div>
                        <div className='product-price'>
                          <span className='price'>{product.price.toLocaleString() + " VNĐ"}</span>
                        </div>
                      </div>
                      <div className='view-product'>
                        <Link to={`/product-detail/${product.id}`}>
                          <button className='view-btn'>
                            <FontAwesomeIcon icon={faEye} className='eye-view' />
                          </button>
                        </Link>
                      </div>
                      <div className='add-to-cart'>
                        <button
                          className='add-to-cart-btn'
                          onClick={() => {
                            openPopup(product.imgUrl, product.name, product.id);
                          }}
                        >
                          <div className='item-icon'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </div>
                          <div className='item-number'>
                            {cartItems[product.id] > 0 && `${cartItems[product.id]}`}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>



                ))
              ) : (
                <p style={{
                  fontFamily: 'Unica One,sans-serif',
                  fontSize: '50px'
                }}>No products found for "{query}"</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {
        isPopupOpen && (
          <div className='popup'>
            <button className='close-popup' onClick={closePopup}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <div className='popup-infor'>
              <div className='popup-img'>
                <img src={selectedProduct.imgUrl} alt={selectedProduct.name} />
              </div>
              <div className='popup-name'>
                <h2>{selectedProduct.name}</h2>
              </div>
              <form className='popup-size-quantity'>
                <div className='select-size'>
                  <label htmlFor='lable-size' style={{ fontFamily: 'Karla, sans-serif' }}>
                    Size:
                  </label>
                  <br />
                  <select id='option-size' style={{ fontFamily: 'Karla, sans-serif' }} name='lable-size'>
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
                <div className='select-quantity'>
                  <label htmlFor='quantity' style={{ fontFamily: 'Karla, sans-serif' }}>
                    Quantity:
                  </label>
                  <div className='control-quantity'>
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
                            controlWidth: '98%',
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
            </div>

            <div className='purchase-action'>
              <div className='addCartBtn'>
                <button
                  className='popup-add-to-cart'
                  type='submit'
                  onClick={() => {
                    addToCart(selectedProduct.id, selectedQuantity);
                    showAddToCartAlert();
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>


          </div>
        )
      }
    </div >

  );
}

export default SearchResult;