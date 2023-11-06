import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AdminEditProduct.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import API from '../../config/api';
import products from '../Shop/ProductList';
import { useSelector } from 'react-redux';

const AdminAddBlog = () => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)

    const currentUser = useSelector((state)=> state.user.currentUser)

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
        if (!title || !content) {
            showMessageError("Vui lòng điền đầy đủ thông tin")
            return
        }
        setLoading(true)
        const resUpload = await getUrlImg()
        const data = {
            title: title,
            content: content,
            img: resUpload.data.display_url,
        }
        try {
            const res = await API.addBlog(data, currentUser.token)
            Swal.fire({
                title: "Tạo blog thành công",
                icon: 'success',
            });
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
                        className='text-lg text-blue-500 hover:no-underline'
                        to={'/admin/add-blog'}>
                        {`+Thêm mới`}
                    </Link>
                </div>
            </div>
            <div className='flex-1'>
                <div className='container'>
                    <div className='product-detail'>
                        <div className='product-image'>
                            <div>
                                <div>
                                    <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handleFileChange} />
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
                                        Tiêu đề:
                                    </label>
                                    <br />
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} className='productName mb-3' type="text" placeholder='Tên blog' />
                                    <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                        Nội dung:
                                    </label>
                                    <br />
                                    <textarea value={content} onChange={(e)=> setContent(e.target.value)} className='outline outline-offset-2 outline-1' rows={10}/>
                                </div>
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

export default AdminAddBlog;