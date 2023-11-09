
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../config/api';
import Swal from 'sweetalert2';
import './Adminpage.css'
import { Pagination } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

export default function DashBoard() {
    const [listShoe, setListShoe] = useState([]);
    const [render, setRender] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('A-Z');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

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
        <div className='flex product-admin-container'>
            <div className='flex flex-col text-xl pt-4 ps-12'>
                <Link
                    className='px-1.5 py-0.5 border-b hover:no-underline'
                    to={'/admin'}>
                    Product
                </Link>
                <div className='ps-6 border-b'>
                    <Link
                        className='text-lg text-blue-500 hover:no-underline'
                        to={'/admin/add-product'}>
                        {`+ Add Product`}
                    </Link>
                </div>
                <Link
                    className='px-1.5 py-0.5 border-b hover:no-underline'
                    to={'/admin/payment'}>
                    Order
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
                        {`+ Add Blog`}
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
                    <div key={index} className='product-content flex justify-start'>
                        <div className="product-infor-admin">
                            <div className='product-id-admin'>
                                <div>{shoes.id}</div>
                            </div>
                            <div className='product-img-admin'>
                                <img className='' src={shoes.urlImg} alt={shoes.name} />
                            </div>
                            <div className='product-name-admin'>
                                <div>{shoes.name}</div>
                            </div>
                            <div className='product-price-admin'>
                                <div>{shoes.price.toLocaleString() + ' VND'}</div>
                            </div>
                            <div className='product-brand-admin'>
                                <div>{shoes.brand.Name}</div>
                            </div>
                        </div>

                        <div className="action-btn-admin">
                            <div className='edit-btn-admin'>
                                <Link to={`/admin/product/${shoes.id}`} className=''><EditFilled className='edit-btn'/></Link>
                            </div>
                            <div className='delete-btn-admin'>
                                <button onClick={() => handleDelete(shoes.id)} className=''><DeleteFilled className='delete-btn'/></button>
                            </div>
                        </div>

                    </div>
                ))}

                <div className="pagination" style={{ display: "flex", alignContent: "center" }}>
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

