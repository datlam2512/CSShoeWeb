import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AdminEditProduct.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import API from '../../config/api';
import products from '../Shop/ProductList';

const AdminAddProduct = () => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("1")
    const [loading, setLoading] = useState(false)
    const [listBrand, setListBrand] = useState([])

    useEffect(() => {
        const getBrand = async () => {
            try {
                const res = await API.getBrand()
                setListBrand(res.data)
            } catch (err) {

            }
        }
        getBrand()
    }, [])

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const showMessageError = (message) => {
        Swal.fire({
            title: message,
            icon: 'error',
        });
    };

    const getUrlImg = async () => {
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await axios.post("https://api.imgbb.com/1/upload?key=a83bb7b270c95fd8a078837a2d919593", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return res.data
        } catch (err) {
            return null
        }

    }
    const getUrlImgWithUrl = async (url) => {
        const formData = new FormData();
        formData.append("image", url);
        try {
            const res = await axios.post("https://api.imgbb.com/1/upload?key=a83bb7b270c95fd8a078837a2d919593", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return res.data
        } catch (err) {
            return null
        }

    }

    const importData = async () => {
        setLoading(true)
        for (let i = 0; i < products.length; i++) {
            const resUpload = await getUrlImgWithUrl(products[i].imgUrl)
            if (!resUpload) {
                continue
            }
            const data = {
                Name: products[i].name,
                Price: products[i].price,
                BrandID: Math.ceil(Math.random() * 3),
                URL: resUpload.data.display_url,
                Description: "create shoes"
            }
            try {
                const res = await API.addProduct(data)
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(false)
    }

    const handelSubmit = async () => {
        if (!file) {
            showMessageError("Vui lòng tải ảnh lên")
            return
        }
        if (!name || !price) {
            showMessageError("Vui lòng điền đầy đủ thông tin")
            return
        }
        setLoading(true)
        const resUpload = await getUrlImg()
        const data = {
            Name: name,
            Price: Number(price),
            BrandID: Number(brand),
            URL: resUpload.data.display_url,
            Description: "create shoes"
        }
        try {
            const res = await API.addProduct(data)
            Swal.fire({
                title: res.data.message,
                icon: 'success',
            });
            setName("")
            setPrice("")
        } catch (err) {
            showMessageError(err.response.data.message)
        }
        setLoading(false)
    }

    return (<div>
        <div className='flex'>
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
            </div>
            <div className='flex-1'>
                <div className='container'>
                    <div className='product-detail'>
                        <div className='product-image'>
                            <div>
                                <div>
                                    <input type="file" onChange={handleFileChange} />
                                    <div className='mt-3'>
                                        {
                                            file ? <img src={URL.createObjectURL(file)} alt="Selected" style={{ maxWidth: '100%' }} /> : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='product-infor'>
                            <div className='width-product-infor'>
                                <div className='productSingle'>
                                    <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                        Tên sản phẩm:
                                    </label>
                                    <br />
                                    <input value={name} onChange={(e) => setName(e.target.value)} className='productName mb-3' type="text" placeholder='Tên sản phẩm' />
                                    <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                        Giá:
                                    </label>
                                    <br />
                                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Giá' />
                                </div>

                                <form className='payment-form'>
                                    <div className='size-selector'>
                                        <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                            Brand:
                                        </label>
                                        <br />
                                        <select
                                            className='w-1/5'
                                            value={brand}
                                            onChange={(e) => setBrand(e.target.value)}
                                            style={{ fontFamily: 'Karla, sans-serif' }}
                                        >
                                            {
                                                listBrand.map((item, index) => (
                                                    <option key={index} value={item.BrandID}>{item.Name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </form>

                                <div className='purchase-action'>
                                    <div className='addCartBtn'>
                                        {
                                            loading ? <button disabled className='rounded px-4 py-2 bg-blue-400 opacity-50'>Add</button>
                                                :
                                                <button onClick={handelSubmit} className='rounded px-4 py-2 bg-blue-500'>Add</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </div>
    </div>);
}

export default AdminAddProduct;