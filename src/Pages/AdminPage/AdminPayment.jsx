import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import API from '../../config/api'
import Swal from 'sweetalert2';

const AdminPayment = () => {
    const [listPayment, setListPayment] = useState([])
    const [render, setRender] = useState(true)

    useEffect(() => {
        const getListPayment = async () => {
            try {
                const res = await API.getAllPayment()
                setListPayment(res.data)
            } catch (err) {

            }
        }
        getListPayment()
    }, [render])

    const handleSubmit = async(data)=>{
        if(window.confirm("Bạn có chắc chắn muốn duyệt thanh toán đơn hàng này")){
            try{
                const res = await API.updatePayment(data)
                Swal.fire({
                    title: "Duyệt thanh toán thành công",
                    icon: 'success',
                });
                setRender(!render)
            }catch(err){

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
                    className='px-1.5 py-0.5 border-b text-blue-500 hover:no-underline'
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
                <div className='flex justify-center'>
                    <div className='w-11 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Id</div>
                    </div>
                    <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Email</div>
                    </div>
                    <div className='w-16 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>UserId</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>PhoneNumber</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Name</div>
                    </div>
                    <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Address</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Status payment</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Total price</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Date created</div>
                    </div>
                    <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                    </div>
                </div>
                {
                    listPayment.map((payment, index) => (
                        <div key={index} className='flex justify-center'>
                            <div className='w-11 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{payment.OrderID}</div>
                            </div>
                            <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div >{payment.email}</div>
                            </div>
                            <div className='w-16 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{payment.UserID}</div>
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{payment.phone}</div>
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{payment.firstName + " " + payment.lastName}</div>
                            </div>
                            <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{payment.apartment + " - " + payment.district + " - " + payment.city}</div>
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                {payment.payment_status == 0 ?
                                    <div className='text-red-500'>Chưa duyệt</div>
                                    :
                                    <div className='text-green-600'>Đã duyệt</div>
                                }
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{(payment.total_price + 20000).toLocaleString() + ' VND'}</div>
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div>{new Date(payment.created_at).toLocaleString()}</div>
                            </div>
                            <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                {
                                    payment.payment_status 
                                    ? 
                                    <button disabled className='my-2 px-3 py-1 rounded bg-gray-500'>Duyệt</button>
                                    : 
                                    <button onClick={()=> handleSubmit({OrderID: payment.OrderID, status: 1})} className='my-2 px-3 py-1 rounded bg-green-500'>Duyệt</button>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminPayment;