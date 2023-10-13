import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import Product from './Product'; // Import your Product component here
import products from './ProductList';

export default function ProductMarketPlace() {
    const [sortOption, setSortOption] = useState('choice'); // Mặc định là 'choice'
    const { addToCart, cartItems } = useContext(ShopContext);

    function sortProducts(products, option) {
        if (option === 'title-ascending') {
            return products.slice().sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'title-descending') {
            return products.slice().sort((a, b) => b.name.localeCompare(a.name));
        } else if (option === 'price-ascending') {
            return products.slice().sort((a, b) => a.price - b.price);
        } else if (option === 'price-descending') {
            return products.slice().sort((a, b) => b.price - a.price);
        } else {
            // Nếu không có tùy chọn nào, trả về mảng ban đầu
            return products;
        }
    }

    return (
        <>
            <div className='sort-by'>
                <label className="sort-by-toggle" role="button" tabIndex="0" aria-expanded="false">
                    Sort By
                </label>
                <select
                    id="changeSortBy"
                    className="sortby-select"
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="choice">Your Choice</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                </select>
            </div>
            <div className='row'>
                {sortProducts(products, sortOption).map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        imgUrl={product.imgUrl}
                        name={product.name}
                        price={product.price.toLocaleString() + " VNĐ"}
                    />
                ))}
            </div>
        </>
    );
}
