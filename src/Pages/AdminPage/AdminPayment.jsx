import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import API from '../../config/api'
import Swal from 'sweetalert2';
import './Adminpage.css'
import { CheckSquareFilled, CheckSquareOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

const AdminPayment = () => {
    const [listPayment, setListPayment] = useState([])
    const [render, setRender] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const getListPayment = async () => {
            try {
                const res = await API.getAllPayment()
                setListPayment(res.data.reverse())
            } catch (err) {

            }
        }
        getListPayment()
    }, [render])

    const handleSubmit = async (data) => {
        if (window.confirm("Bạn có chắc chắn muốn duyệt thanh toán đơn hàng này")) {
            try {
                const res = await API.updatePayment(data)
                Swal.fire({
                    title: "Duyệt thanh toán thành công",
                    icon: 'success',
                });
                setRender(!render)
            } catch (err) {

            }

        }
    }

    const totalItems = listPayment.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listPayment.slice(startIndex, endIndex);
    return (
        <div div className="order-management" >
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
                    <div className='flex justify-center'>
                        <div className='w-11 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Id</div>
                        </div>
                        <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Email</div>
                        </div>
                        <div className='w-16 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>User Id</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Phone</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Name</div>
                        </div>
                        <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Address</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Status</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title history-infor-title'>Total price</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                            <div className='history-infor-title'>Date</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                        </div>
                    </div>
                    {
                        currentItems.map((payment, index) => (
                            <div key={index} className='flex justify-start'>
                                <div className='w-11 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.OrderID}</div>
                                </div>
                                <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.email}</div>
                                </div>
                                <div className='w-16 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.UserID}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.phone}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.firstName + " " + payment.lastName}</div>
                                </div>
                                <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{payment.apartment + " - " + payment.district + " - " + payment.city}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    {payment.payment_status == 0 ?
                                        <div className='history-status red-status'>Chưa duyệt</div>
                                        :
                                        <div className='history-status green-status'>Đã duyệt</div>
                                    }
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{(payment.total_price + 20000).toLocaleString() + ' VND'}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    <div className='history-infor-detail'>{new Date(payment.created_at).toLocaleString()}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start'>
                                    {
                                        payment.payment_status
                                            ?
                                            <button disabled className='history-status '><CheckSquareOutlined className='checked-status' /></button>
                                            :
                                            <button onClick={() => handleSubmit({ OrderID: payment.OrderID, status: 1 })} className='history-status'><CheckSquareOutlined className='check-status' /></button>
                                    }

                                </div>
                            </div>
                        ))
                    }
                    <div className="pagination" style={{ display: "flex", justifyContent: "center", marginRight: "140px;" }}>
                        <Pagination
                            current={currentPage}
                            total={totalItems}
                            pageSize={itemsPerPage}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AdminPayment;