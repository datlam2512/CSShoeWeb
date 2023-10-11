import React from 'react'
import './ProductMarketPlace.css'
import Product from './Product';
import products  from './ProductList';
export default function ProductMarketPlace() {
    return (
        <div className='row'>
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    imgUrl={product.imgUrl}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}