
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
          <div>
        <ul>
        <li><Link to="/admin/dashboard">Dash Board</Link></li>
        <li><Link to="/admin/manage-order">Manage Order</Link></li>
        <li><Link to="/admin/manage-product">Manage Product</Link></li>
        <li><Link to="/admin/manage-blog">Manage Blog</Link></li>
      </ul>
      </div>
      <Outlet/>
        </div>
  )
}
