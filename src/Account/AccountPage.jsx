import React, { useContext } from 'react'
import { UserContext } from '../context/user-context'
import { Navigate, useNavigate } from 'react-router-dom';
import './AccountPage.css'
function AccountPage() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setUser(null); //clear user tu context
        navigate('/Login');
    }
    return (
    <div className='account-page'>
        <div>AccountPage</div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AccountPage;