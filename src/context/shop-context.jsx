/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import ProductMarketPlace from '../Pages/ShopPage/ProductMarketPlace';
import products from '../Pages/ShopPage/ProductList';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let i = 1;
    let cart= {};
    for (i; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : prev[itemID] + 1}))
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : prev[itemID] -1 }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart }
    console.log(cartItems);

    return ( <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> )
}
