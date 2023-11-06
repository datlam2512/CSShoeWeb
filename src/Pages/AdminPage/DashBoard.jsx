import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import products from '../Shop/ProductList'
import API from '../../config/api'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

export default function DashBoard() {
    const [listShoe, setListShoe] = useState([])
    const [render, setRender] = useState(true)
    const currentUser = useSelector((state) => state.user.currentUser)
    const naviagte = useNavigate()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            naviagte("/")
        }
    }, [])

    useEffect(() => {
        const getListShoes = async () => {
            try {
                const res = await API.getListProduct()
                setListShoe(res.data)
            } catch (err) {

            }
        }
        getListShoes()
    }, [render])

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa không")) {
            try {
                const res = await API.deleteProduct(id)
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                });
                setRender(!render)
            } catch (err) {
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
                {
                    listShoe.map((shoes, index) => (
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
                    ))
                }
            </div>
        </div>
    )
}
