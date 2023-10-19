import React from 'react'

export default function ShopeNike() {
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
