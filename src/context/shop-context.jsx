/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
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
    
    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                total += cartItems[item] * itemInfo.price
            }
        }
        return total;
    }

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : prev[itemID] + 1}))
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : prev[itemID] -1 }))
    }

    const updateCartItemcount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : newAmount }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemcount, getTotalCartAmount }

    return ( <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> )
}
