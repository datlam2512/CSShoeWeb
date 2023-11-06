import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import API from '../config/api';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const PurchaseHistory = () => {
    const [listPayment, setListPayment] = useState([])
    const [render, setRender] = useState(true)
    const currentUser = useSelector((state) => state.user.currentUser)

    useEffect(() => {
        const getListPayment = async () => {
            try {
                const res = await API.getPurchaseHistory(currentUser.token)
                setListPayment(res.data)
            } catch (err) {

            }
        }
        getListPayment()
    }, [render])

    const handleSubmit = async (data) => {
        console.log(data);
        try {
            const res = await API.getDetailPurchaseHistory(data.OrderID)
            console.log(res.data);
            setRender(!render)
        } catch (err) {

        }


    }

    return (
        <div className='flex'>
            <div className='flex-1'>
                <div className='flex justify-center'>
                    <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                        <div>Email</div>
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
                            <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-center'>
                                <div >{payment.email}</div>
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
                                    <Link to={`/Account/purchase-history/${payment.OrderID}`} className='px-3 py-1 rounded bg-green-500'>Detail</Link>
                                   
                                    // <button onClick={() => handleSubmit({ OrderID: payment.OrderID, status: 1 })} className='my-2 px-3 py-1 rounded bg-green-500'>Detail</button>
                                    
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PurchaseHistory;