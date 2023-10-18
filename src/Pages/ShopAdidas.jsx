import React from 'react'
import './ShopPage.css';
import ProductMarketPlace from './ShopAdidas/ProductMarketPlace';
import FilterProduct from './ShopAdidas/FilterProduct';
import { Pagination } from 'antd';
import ShopTitle from './ShopAdidas/ShopTitle';
export default function ShopAdidas() {
  return (
    <div className='marketplace-container'>
    <div className='shop-title'>
      <ShopTitle />
    </div>
    <div className='main-content'>
      <div className='subdue'>
        <FilterProduct />
      </div>
      <div className='product'>
        <ProductMarketPlace />
      </div>
    </div>
   
  </div>
  )
}
