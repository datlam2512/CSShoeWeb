import React from 'react';
import './ShopPage.css';
import ProductMarketPlace from './ProductMarketPlace';
import FilterProduct from './FilterProduct';
import { Pagination } from 'antd';
import ShopTitle from './ShopTitle';

export default function Shop() {
  return (
    <div className='marketplace-container'>
      <div className='shop-title'>
        <ShopTitle />
      </div>
      <div className='main-content'>
        {/* <div className='subdue'>
          <FilterProduct />
        </div> */}
        <div className='product'>
          <ProductMarketPlace />
        </div>
      </div>
     
    </div>
  );
}



