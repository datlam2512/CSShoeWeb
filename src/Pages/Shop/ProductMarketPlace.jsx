import React, { useContext, useState, useEffect } from 'react';
import './ProductMarketPlace.css';
import Product from './Product';
import { ShopContext } from '../../context/shop-context';
import { Pagination } from 'antd';
import products from './ProductList';
import API from '../../config/api';

export default function ProductMarketPlace() {
    const [sortOption, setSortOption] = useState('choice');
    const [limit, setLimit] = useState(12);
    const { addToCart, cartItems } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [listShoe, setListShoe] = useState([])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const sortProducts = (products, option) => {
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
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setCurrentPage(1);
    };

    const handleBrandChange = (e) => {
        const newBrand = e.target.value;
        setSelectedBrand(newBrand);
        setCurrentPage(1);
        setSortOption('choice');
    };

    useEffect(() => {
        const getListShoes = async () => {
            try {
                const res = await API.getListProduct()
                setListShoe(res.data)
            } catch (err) {

            }
        }
        getListShoes()
    }, [])

    useEffect(() => {
        // const getListShoes = async () => {
        //     try {
        //         const res = await API.getListProduct()
        //         let filtered = res.data;

        //         if (selectedBrand !== 'All') {
        //             filtered = filtered.filter((product) => product.brand === selectedBrand);
        //         }

        //         if (selectedBrand === 'All') {
        //             filtered = shuffleArray(filtered);
        //         }

        //         setFilteredProducts(sortProducts(filtered, sortOption));
        //     } catch (err) {

        //     }
        // }
        // getListShoes()
        let filtered = listShoe;

        if (selectedBrand !== 'All') {
            filtered = filtered.filter((product) => product.brand === selectedBrand);
        }

        if (selectedBrand === 'All') {
            filtered = shuffleArray(filtered);
        }

        setFilteredProducts(sortProducts(filtered, sortOption));
    }, [listShoe, selectedBrand, sortOption]);

    return (
        <>
            <div className="sort">
                <div className="sort-limit">
                    <div className="sort-by">
                        <label className="sort-by-toggle" role="button" tabIndex="0" aria-expanded="false">
                            Brand
                        </label>
                        <select
                            id="changeSortBy"
                            className="sortby-select"
                            onChange={handleBrandChange}
                            value={selectedBrand}
                        >
                            <option value="All">All</option>
                            <option value="nike">NIKE</option>
                            <option value="adidas">ADIDAS</option>
                            <option value="vans">VANS</option>
                        </select>
                    </div>
                    <div className="sort-by limit-by">
                        <label htmlFor="setLimit" className="sort-by-toggle" role="button" tabIndex="0" aria-expanded="false">
                            Show
                        </label>
                        <select
                            id="setLimit"
                            className="sortby-select"
                            onChange={(e) => handleLimitChange(parseInt(e.target.value))}
                            value={limit}
                        >
                            <option value="12">12</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                    <div className="sort-by">
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

            <div className="row">
                {filteredProducts
                    .slice((currentPage - 1) * limit, currentPage * limit)
                    .map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            imgUrl={product.urlImg}
                            name={product.name}
                            price={product.price.toLocaleString() + ' VNĐ'}
                        />
                    ))}
            </div>

            <div className="pagination">
                <Pagination
                    size="default"
                    defaultCurrent={1}
                    total={filteredProducts.length}
                    pageSize={limit}
                    current={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
}
