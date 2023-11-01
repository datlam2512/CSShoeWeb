
import React from 'react'
import './Admin.css'
import SideBarDashBoard from './SideBarDashBoard'
import { Route, Routes } from 'react-router-dom'
import DashBoardContent from './DashBoardContent'
import ManageOrder from './ManageOrder'
import ManageProduct from './ManageProduct'
import ManageBlog from './ManageBlog'


export default function Admin() {
  return (
    <div className="dashBooard">
      <div className="dashBoard">
        <div className="sideBarDashBoard">
          <SideBarDashBoard />
        </div>

        <div className='dashBoardContent'>
          <Routes>
            <Route path='/dashboard' element={<DashBoardContent />} />
            <Route path='/manage-order' element={<ManageOrder />} />
            <Route path='/manage-product' element={<ManageProduct />} />
            <Route path='/manage-blog' element={<ManageBlog />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
