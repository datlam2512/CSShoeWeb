// ShopContext.js
import React, { createContext, useState, useEffect } from 'react';
// import products from '../Pages/Shop/ProductList';
import API from '../config/api';

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let i = 1;
    let cart = {};
    for (i; i < 200; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart(products));
    const [selectedSize, setSelectedSize] = useState('33'); // Default size
    useEffect(() => {
        const getListShoes = async () => {
            try {
                const res = await API.getListProduct()
                setProducts(res.data)
            } catch (err) {

            }
        }
        getListShoes()
    }, [])
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                total += cartItems[item] * itemInfo.price;
            }
        }
        return total;
    };

    const addToCart = (itemID, quantity) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + quantity }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };
    const removeAll = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: 0 }))
    }

    const updateCartItemcount = (newAmount, itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
    };

    const selectSize = (size) => {
        setSelectedSize(size);
    };

    const contextValue = {
        cartItems,
        selectedSize,
        addToCart,
        removeFromCart,
        updateCartItemcount,
        selectSize,
        getTotalCartAmount,
        removeAll
    };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};
