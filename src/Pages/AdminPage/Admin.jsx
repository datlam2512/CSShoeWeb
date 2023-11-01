
import React from 'react'
import './Admin.css'
import SideBarDashBoard from './SideBarDashBoard'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import DashBoardContent from './DashBoardContent'
import ManageOrder from './ManageOrder'
import ManageProduct from './ManageProduct'
import ManageBlog from './ManageBlog'


export default function Admin() {
  return (
        <div className="sideBarDashBoard">
          <div className='sidebar-admin'>
            <div className='admin-icon'>
              <Link to='/admin/profileadmin' style={{textDecoration:"none", color:"#000"}}>
          <i class="fa fa-user-circle-o admin" aria-hidden="true"></i>
          </Link>
          </div>
          <div className='sidebar-content'>
        <ul className='sidebar-link'>
        <li><Link className='item-sidebar' to="/admin/customerinfo" style={{textDecoration:"none"}}>Account User</Link></li>
        <li><Link className='item-sidebar' to="/admin/manage-order" style={{textDecoration:"none"}}>Manage Order</Link></li>
        <li><Link className='item-sidebar' to="/admin/manage-product" style={{textDecoration:"none"}}>Manage Product</Link></li>
        <li><Link className='item-sidebar' to="/admin/manage-blog" style={{textDecoration:"none"}}>Manage Blog</Link></li>
      </ul>
      </div>
      </div>
      <div className='sidebar-content'>
      <Outlet/>
      </div>
        </div>
  )
}
