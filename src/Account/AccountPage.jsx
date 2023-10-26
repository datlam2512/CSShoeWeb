import React, { useContext } from 'react'
import { UserContext } from '../context/user-context'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './AccountPage.css'
import { loginUser } from '../Pages/Login/api';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AccountPage() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setUser(null); //clear user tu context
        navigate('/Login');
    }
    return (
    <div className='account-page'>
        <div className='subnav-account'>
        <div className='subnav-top'>
        <i><FontAwesomeIcon icon={faUserCircle} /></i>   
        <p>{user?user.Username:""}</p>
        </div>
        <ul>
            <li className='account-detail'><Link to={'#accountdetail'}>Account detail</Link></li>
            <li className='account-detail'><a href='#Adress'>Address</a></li>
            <li className='account-detail'><a href='#historypurchase'>History Purchase</a></li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
        </div>
        <div className='account-content'>
            <p>content</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default AccountPage;
