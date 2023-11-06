import React, { useState, useEffect } from 'react';
import Search from 'antd/es/input/Search';
import './ManageProduct.css';
import { Pagination, Modal } from 'antd';

import products from '../Shop/ProductList';

export default function ManageProduct() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);

    const [editProduct, setEditProduct] = useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [sizeQuantity, setSizeQuantity] = useState({});


    const pageSize = 12;

    useEffect(() => {
        if (searchKeyword) {
            const filteredProducts = products.filter((product) =>
                product.name && product.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );

            const totalProducts = filteredProducts.length;
            setTotalProducts(totalProducts);

            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
            setDisplayedProducts(productsToDisplay);
        } else {
            const totalProducts = products.length;
            setTotalProducts(totalProducts);

            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const productsToDisplay = products.slice(startIndex, endIndex);
            setDisplayedProducts(productsToDisplay);
        }
    }, [searchKeyword, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const showEditModal = (product) => {
        setEditProduct(product);
        setSelectedSize('');
        setQuantity(0);
        setIsEditModalVisible(true);
    };

    const handleEditModalCancel = () => {
        setIsEditModalVisible(false);
    };

    const handleUpdateProduct = () => {

        setIsEditModalVisible(false);
    };

    return (
        <div className="manage-product">
            <div className="manage-product-header">
                <Search
                    style={{ width: 200 }}
                    placeholder="Nhập từ khóa tìm kiếm"
                    enterButton
                    onSearch={(value) => setSearchKeyword(value)}
                />
            </div>

            <div className="manage-product-container">
                <div className="title">SẢN PHẨM</div>
                <div className="manage-product-content">
                    <div className="manage-product-list">
                        {displayedProducts.map((product) => (
                            <div className="manage-product-items" key={product.id}>
                                <div className="manage-item-infor">
                                    <div className="manage-item-img margin-right">
                                        <img src={product.imgUrl} alt={product.name} />
                                    </div>
                                    <div className="manage-item-name margin-right">
                                        <p>{product.name}</p>
                                    </div>
                                    <div className="manage-item-cost margin-right">
                                        <p>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                                        </p>
                                    </div>
                                    <div className="manage-item-size margin-right">
                                        <label htmlFor="shoe-size">Size:</label>
                                        <select
                                            id="shoe-size"
                                            name="shoe-size"
                                            value={selectedSize}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                        >
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <option value={i + 33} key={i}>
                                                    {i + 33}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="item-quantity margin-right">
                                        <label htmlFor="shoe-quantity">Quantity:</label>
                                        <p>35</p>
                                    </div>
                                    <div className="manage-item-brand margin-right">
                                        <label htmlFor="shoe-brand">Brand:</label>
                                        <select id="shoe-brand" name="shoe-brand">
                                            <option value="nike">Nike</option>
                                            <option value="adidas">Adidas</option>
                                            <option value="vans">Vans</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="manage-item-action">
                                    <div className="edit-btn">
                                        <button onClick={() => showEditModal(product)}>Edit</button>
                                    </div>
                                    <div className="delete-btn">
                                        <button>Detele</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="pagination">
                            <Pagination
                                defaultCurrent={1}
                                current={currentPage}
                                total={totalProducts}
                                pageSize={pageSize}
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Chỉnh sửa sản phẩm"
                visible={isEditModalVisible}
                onOk={handleUpdateProduct}
                onCancel={handleEditModalCancel}
            >
                {editProduct && (
                    <div className="edit-product-form">
                        <label>Tên sản phẩm:</label>
                        <input type="text" value={editProduct.name} onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })} />

                        <label>Giá sản phẩm:</label>
                        <input type="number" value={editProduct.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} />

                        <div className="popup-item-size margin-right">
                            <label>Nhập Size và số lượng:</label>
                            <div style={{ flexDirection: 'column' }}>
                                {Array.from({ length: 12 }, (_, i) => {
                                    const size = i + 33;
                                    return (
                                        <div key={size} style={{ display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="checkbox"
                                                id={`size-${size}`}
                                                name={`size-${size}`}
                                                checked={!!sizeQuantity[size]}
                                                onChange={(e) => setSizeQuantity({
                                                    ...sizeQuantity,
                                                    [size]: e.target.checked ? (sizeQuantity[size] || 0) : undefined
                                                })}
                                                style={{ width: '20px', height: '20px' }}
                                            />
                                            <label htmlFor={`size-${size}`}>{size}</label>
                                            {sizeQuantity[size] !== undefined && (
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={sizeQuantity[size]}
                                                    onChange={(e) => setSizeQuantity({
                                                        ...sizeQuantity,
                                                        [size]: e.target.value
                                                    })}
                                                    placeholder="Số lượng"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                )}
            </Modal>

        </div>
    );
}
