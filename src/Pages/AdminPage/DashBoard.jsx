

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../config/api';
import Swal from 'sweetalert2';
import { Pagination } from 'antd';

export default function DashBoard() {
    const [listShoe, setListShoe] = useState([]);
    const [render, setRender] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('A-Z');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;

    useEffect(() => {
        const getListShoes = async () => {
            try {
                const res = await API.getListProduct();
                setListShoe(res.data);
            } catch (err) {
            }
        };
        getListShoes();
    }, [render]);

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không')) {
            try {
                const res = await API.deleteProduct(id);
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                });
                setRender(!render);
            } catch (err) {
                Swal.fire({
                    title: err.response.data.message,
                    icon: 'error',
                });
            }
        }
    };

    const filteredShoes = listShoe
        .filter((shoe) => shoe.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'A-Z') {
                return a.name.localeCompare(b.name);
            } else if (sortOption === 'Z-A') {
                return b.name.localeCompare(a.name);
            } else if (sortOption === 'PriceLowToHigh') {
                return a.price - b.price;
            } else if (sortOption === 'PriceHighToLow') {
                return b.price - a.price;
            }
            return 0;
        });

    const indexOfLastShoe = currentPage * pageSize;
    const indexOfFirstShoe = indexOfLastShoe - pageSize;
    const currentShoes = filteredShoes.slice(indexOfFirstShoe, indexOfLastShoe);

    return (
        <div className='flex'>
            <div className='flex flex-col text-xl pt-4 ps-12'>
                <Link
                    className='px-1.5 py-0.5 border-b text-blue-500 hover:no-underline'
                    to={'/admin'}>
                    Product
                </Link>
                <div className='ps-6 border-b'>
                    <Link
                        className='text-lg hover:no-underline'
                        to={'/admin/add-product'}>
                        {`+Thêm mới`}
                    </Link>
                </div>
                <Link
                    className='px-1.5 py-0.5 border-b hover:no-underline'
                    to={'/admin/payment'}>
                    Thanh toán
                </Link>
                <Link
                    className='px-1.5 py-0.5 border-b hover:no-underline'
                    to={'/admin/blog'}>
                    Blog
                </Link>
                <div className='ps-6 border-b'>
                    <Link
                        className='text-lg hover:no-underline'
                        to={'/admin/add-blog'}>
                        {`+Thêm mới`}
                    </Link>
                </div>
            </div>
            <div className='flex-1'>
                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "132px" }}>
                    <input
                        style={{ width: "13%", fontSize: "12px" }}
                        type='text'
                        placeholder='Search by product name'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select style={{ width: "13%", fontSize: "12px" }} value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value='A-Z'>Sort by Name (A-Z)</option>
                        <option value='Z-A'>Sort by Name (Z-A)</option>
                        <option value='PriceLowToHigh'>Sort by Price (Low to High)</option>
                        <option value='PriceHighToLow'>Sort by Price (High to Low)</option>
                    </select>
                </div>

                {currentShoes.map((shoes, index) => (
                    <div key={index} className='flex justify-center'>
                        <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                            <div>{shoes.id}</div>
                        </div>
                        <div className='w-1/12 py-2 flex items-center border-b-[1px]'>
                            <img className='w-14 h-14' src={shoes.urlImg} alt={shoes.name} />
                        </div>
                        <div className='w-4/12 flex items-center border-b-[1px]'>
                            <div>{shoes.name}</div>
                        </div>
                        <div className='w-1/12 flex items-center border-b-[1px]'>
                            <div>{shoes.price.toLocaleString() + ' VND'}</div>
                        </div>
                        <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                            <div>{shoes.brand.Name}</div>
                        </div>
                        <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                            <Link to={`/admin/product/${shoes.id}`} className='px-3 py-1 rounded bg-green-500'>Edit</Link>
                        </div>
                        <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                            <button onClick={() => handleDelete(shoes.id)} className='px-3 py-1 rounded bg-red-500'>Delete</button>
                        </div>
                    </div>
                ))}

                <div className="pagination" style={{display: "flex", alignContent: "center"}}>
                    <Pagination

                        current={currentPage}
                        total={filteredShoes.length}
                        pageSize={pageSize}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>

            </div>
        </div>
    );
}

