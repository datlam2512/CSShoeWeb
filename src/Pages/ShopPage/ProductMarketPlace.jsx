import React, { useContext, useState } from 'react'
import './ProductMarketPlace.css'
import Product from './Product';
import products from './ProductList';
import { ShopContext } from '../../context/shop-context';
import './ProductMarketPlace.css'
export default function ProductMarketPlace() {
    const [sortOption, setSortOption] = useState('choice'); 
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
            return products;
        }
    }
    return (
        <>
            {/* ... Rest of your JSX ... */}
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