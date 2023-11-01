import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashBoardContent from './DashBoardContent';
import ManageOrder from './ManageOrder';
import ManageProduct from './ManageProduct';
import ManageBlog from './ManageBlog';

export default function SideBarDashBoard() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dash Board</Link></li>
        <li><Link to="/manage-order">Manage Order</Link></li>
        <li><Link to="/manage-product">Manage Product</Link></li>
        <li><Link to="/manage-blog">Manage Blog</Link></li>
      </ul>
      <Routes>
        <Route path='/dashboard' element={<DashBoardContent />} />
        <Route path='/manage-order' element={<ManageOrder />} />
        <Route path='/manage-product' element={<ManageProduct />} />
        <Route path='/manage-blog' element={<ManageBlog />} />
      </Routes>

    </div>
  );
}
