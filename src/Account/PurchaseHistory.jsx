
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import API from '../config/api';
import './PurchaseHistory.css';
import { EyeOutlined } from '@ant-design/icons';

const PurchaseHistory = () => {
    const [listPayment, setListPayment] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        const getListPayment = async () => {
            try {
                const res = await API.getPurchaseHistory(currentUser.token);
                setListPayment(res.data.reverse());
            } catch (err) {
            }
        };
        getListPayment();
    }, [currentPage, currentUser.token]);

    const totalItems = listPayment.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listPayment.slice(startIndex, endIndex);

    return (
        <div className="purchase-history">
            <div className='flex justify-center'>
                <div className='flex-1'>
                    <div className='flex justify-start	'>
                        <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Email</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Phone</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Name</div>
                        </div>
                        <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Address</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Status</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Total price</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                            <div className='history-infor-title'>Date</div>
                        </div>
                        <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'></div>
                    </div>
                    {
                        currentItems.map((payment, index) => (
                            <div key={index} className='flex justify-start	'>
                                <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{payment.email}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{payment.phone}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{payment.firstName + " " + payment.lastName}</div>
                                </div>
                                <div className='w-2/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{payment.apartment + ", " + payment.district + ", " + payment.city}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    {payment.payment_status === 0 ?
                                        <div className='history-status red-status' >Chưa duyệt</div>
                                        :
                                        <div className='history-status green-status'>Đã duyệt</div>
                                    }
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{(payment.total_price + 20000).toLocaleString() + ' VND'}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <div className='history-infor-detail'>{new Date(payment.created_at).toLocaleString()}</div>
                                </div>
                                <div className='w-1/12 mx-2 flex items-center border-b-[1px] justify-start	'>
                                    <Link to={`/Account/purchase-history/${payment.OrderID}`} className='view-btn'><EyeOutlined style={{fontSize: "22px",}}/></Link>
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
        </div>
    );
};

export default PurchaseHistory;
