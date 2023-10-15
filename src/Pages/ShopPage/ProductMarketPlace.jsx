import React, { useContext, useState } from 'react'
import './ProductMarketPlace.css'
import Product from './Product';
import products from './ProductList';
import { ShopContext } from '../../context/shop-context';
import './ProductMarketPlace.css'
import { Pagination } from 'antd';
import { useEffect } from 'react';
export default function ProductMarketPlace() {
    const [sortOption, setSortOption] = useState('choice');
    const [limit, setLimit] = useState(12);
    const { addToCart, cartItems } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);


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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [currentPage]);

    return (
        <>
            <div className='sort'>
                <div className='sort-limit'>
                    <div class="sort-by limit-by">
                        <label for="setLimit" class="sort-by-toggle" role="button" tabindex="0" aria-expanded="false">
                            Show
                        </label>

                        <select id="setLimit"
                            class="sortby-select"
                            onChange={(e) => setLimit(parseInt(e.target.value))}
                            value={limit}
                        >
                            <option value="12">12</option>
                            <option selected="" value="24">24</option>
                        </select>
                    </div>



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
                </div>
            </div>


            <div className='row'>
                {sortProducts(products, sortOption)
                    .slice((currentPage - 1) * limit, currentPage * limit)
                    .map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            imgUrl={product.imgUrl}
                            name={product.name}
                            price={product.price.toLocaleString() + " VNĐ"}
                            addToCart={addToCart} 
                            cartQuantity={cartItems[product.id]} 
                        />
                    ))}
            </div>

            <div className='pagination'>
                <Pagination
                    simple
                    defaultCurrent={1}
                    total={products.length}
                    pageSize={limit}
                    current={currentPage}
                    onChange={handlePageChange}
                />
            </div>



        </>
    );
}