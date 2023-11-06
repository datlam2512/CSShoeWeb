import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import products from '../Shop/ProductList'
import API from '../../config/api'
import Swal from 'sweetalert2';

const AdminBlog = () => {
    const [listBlog, setListBlog] = useState([])
    const [render, setRender] = useState(true)

    useEffect(() => {
        const getListBlog = async () => {
            try {
                const res = await API.getListBlog()
                setListBlog(res.data)
            } catch (err) {

            }
        }
        getListBlog()
    }, [render])

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa không")) {
            try {
                const res = await API.deleteBlog(id)
                Swal.fire({
                    title: "Xóa thành công",
                    icon: 'success',
                });
                console.log(res);
                setRender(!render)
            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: err.response.data.message,
                    icon: 'error',
                });
            }
        }
    }

    return (
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
                    className='px-1.5 py-0.5 border-b text-blue-500 hover:no-underline'
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
                {
                    listBlog.map((blog, index) => (
                        <div key={index} className='flex justify-center'>
                            <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <div>{blog.id}</div>
                            </div>
                            <div className='w-1/12 py-2 flex items-center border-b-[1px]'>
                                <img className='w-14 h-14' src={blog.img} alt={blog.title} />
                            </div>
                            <div className='w-2/12 flex items-center border-b-[1px]'>
                                <div className='line-clamp-2'>{blog.title}</div>
                            </div>
                            <div className='w-1/12 flex items-center border-b-[1px]'>
                                <div>{new Date(blog.publishedAt).toLocaleString()}</div>
                            </div>
                            <div className='w-4/12 flex items-center border-b-[1px] justify-center'>
                                <div className='line-clamp-2'>{blog.content}</div>
                            </div>
                            {/* <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <Link to={`/admin/product/${blog.id}`} className='px-3 py-1 rounded bg-green-500'>Edit</Link>
                            </div> */}
                            <div className='w-1/12 flex items-center border-b-[1px] justify-center'>
                                <button onClick={() => handleDelete(blog.id)} className='px-3 py-1 rounded bg-red-500'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
 
export default AdminBlog;