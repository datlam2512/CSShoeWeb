import React, { useContext } from 'react'
import { UserContext } from '../context/user-context'
import { Navigate, useNavigate } from 'react-router-dom';
import './AccountPage.css'
import { loginUser } from '../Pages/Login/api';
function AccountPage() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setUser(null); //clear user tu context
        navigate('/Login');
    }
    return (
    <div className='account-page'>
        <div>AccountPage</div>
        <div>Welcome, {user ? user.username : 'Guest'}</div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AccountPage;
