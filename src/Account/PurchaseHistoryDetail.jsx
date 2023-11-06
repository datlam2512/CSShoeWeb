import React, { useContext } from 'react'
import '../Pages/Cart/CartContent.css'
// import products from '../Shop/ProductList'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import API from '../config/api';
export default function PurchaseHistoryDetail() {
    const { id } = useParams();
    const [productsHistory, setProductsHistory] = useState([])
    const [products, setProdudcts] = useState([])

    const currentUser = useSelector((state) => state.user.currentUser)
    // console.log(cartItems);

    
    useEffect(() => {
        const getListShoesHistory = async () => {
            try {
                const res = await API.getDetailPurchaseHistory(id)
                setProductsHistory(res.data)

            } catch (err) {

            }
        }
        const getListShoes = async () => {
            try {

                const res = await API.getListProduct()
                setProdudcts(res.data)
            } catch (err) {

            }
        }
        getListShoesHistory()
        getListShoes()

    }, [])
    //   let totalPrice = totalAmount.toLocaleString();
    return (
        <div className='cart-content'>
            <div className='cart-page-title'>
                <h1>History Shopping</h1>
            </div>
            <div className='CartItems'>
                {productsHistory.Order_details?.map((product) => (
                    <div key={product.id} className='cart-item'>
                        <div className='cart-item-img'>
                            <img src={products[product.ShoeID]?.urlImg} alt={`Product: ${product.name}`} />
                        </div>
                        <div className='cart-item-description'>
                            <div className='cart-item-name'>
                                <div className='item-name'>
                                    <Link to={`/product-detail/${product.id}`}>{products[product.ShoeID]?.name}</Link>
                                </div>
                                <div className='item-size'>
                                    Quantity: <p className='size-value'>{product.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-price'>
                            <p>{ (product.amount.toLocaleString())+ " VNĐ"}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='checkout d-flex justify-content-end'>

                <div className='checkout-content'>
                <div className='subtotal'>
                        <p className='subtotal-title'>Shipping: </p>
                        <p className='subtotal-price'>{( 20000).toLocaleString()+ " VNĐ"}</p>
                    </div>
                    <div className='subtotal'>
                        <p className='subtotal-title'>Subtotal: </p>
                        <p className='subtotal-price'>{(productsHistory.total_price + 20000).toLocaleString()+ " VNĐ"}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
