import React from 'react';
import './ShopPage.css';
import ProductMarketPlace from './ShopPage/ProductMarketPlace';
import FilterProduct from './ShopPage/FilterProduct';
import { Pagination } from 'antd';
import ShopTitle from './ShopPage/ShopTitle';

export default function Shop() {
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
      <div className='pagination'>
        <Pagination simple defaultCurrent={2} total={50} />
      </div>
    </div>
  );
}



