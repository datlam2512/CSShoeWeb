import React, { useState, useEffect } from 'react';
import './AdminEditProduct.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import API from '../../config/api';
import { useSelector } from 'react-redux';

const AdminEditBlog = () => {
    const [blog, setBlog] = useState(null);
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [urlImg, setUrlImg] = useState("")
    const [loading, setLoading] = useState(false)
    const param = useParams();

    const currentUser = useSelector((state) => state.user.currentUser)
    const naviagte = useNavigate()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            naviagte("/")
        }
    }, [])

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await API.getBlogById(param.id)
                setBlog(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                setUrlImg(res.data.img)
            } catch (err) {

            }
        }
        getBlog()
    }, [param.id]);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
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
            console.log(err);
            return null
        }
    }

    const showMessageError = (message) => {
        Swal.fire({
            title: message,
            icon: 'error',
        });
    };

    const handleSubmit = async () => {
        if (!title || !content) {
            showMessageError("Vui lòng điền đầy đủ thông tin")
            return
        }
        setLoading(true)
        let url = urlImg
        if (file) {
            const resUpload = await getUrlImg()
            url = resUpload.data.display_url
        }
        const data = {
            title: title,
            content: content,
            img: url,
        }
        try {
            const res = await API.updateBlog(param.id, currentUser.token, data)
            Swal.fire({
                title: "Lưu thành công",
                icon: 'success',
            });
        } catch (err) {
            showMessageError(err.response.data.message)
        }
        setLoading(false)
    }

    return (
        <div className='container'>
            <div className='mb-6 text-xl'>
                <Link to={'/admin/blog'} className='hover:no-underline'>DashBoard</Link>
            </div>
            {blog ? (
                <div className='product-detail'>
                    <div className='product-image'>
                        <div>
                            <div>
                                <input type="file" onChange={handleFileChange} />
                                <div className='mt-3'>
                                    <img src={file ? URL.createObjectURL(file) : urlImg} alt="Selected" style={{ maxWidth: '100%' }} />
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
                                <textarea value={content} onChange={(e) => setContent(e.target.value)} className='outline outline-offset-2 outline-1' rows={10} />
                            </div>
                            <div className='purchase-action'>
                                <div className='addCartBtn'>
                                    {
                                        loading ? <button disabled className='rounded px-4 py-2 bg-blue-300 opacity-50'>Save</button>
                                            : <button onClick={handleSubmit} className='rounded px-4 py-2 bg-blue-500'>Save</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}

export default AdminEditBlog;