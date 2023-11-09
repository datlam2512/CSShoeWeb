import React, { createContext, useState, useEffect } from 'react';
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

const saveCartToLocalStorage = (cart) => {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
};

const getCartFromLocalStorage = (products) => {
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        return JSON.parse(cartJSON);
    } else {
        return getDefaultCart(products);
    }
};


export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getCartFromLocalStorage());
    const [selectedSize, setSelectedSize] = useState('33');

    useEffect(() => {
        const getListShoes = async () => {
            try {
                const res = await API.getListProduct();
                setProducts(res.data);
            } catch (err) {
            }
        };
        getListShoes();
    }, []);

    useEffect(() => {
        saveCartToLocalStorage(cartItems);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                if (itemInfo) {
                    total += cartItems[item] * itemInfo.price;
                }
            }
        }
        return total;
    };


    const addToCart = (itemID, quantity) => {
        const newCartItems = { ...cartItems };
        newCartItems[itemID] = parseInt(newCartItems[itemID]) + quantity;
        setCartItems(newCartItems);
    };



    const removeFromCart = (itemID) => {
        const newCartItems = { ...cartItems };
        if (newCartItems[itemID] > 0) {
            newCartItems[itemID] -= 1;
        }
        setCartItems(newCartItems);
    };


    const removeAll = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
    };

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
        removeAll,
    };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};
