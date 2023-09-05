'use client'
import Product from './Product'
import {useState} from 'react'

const ProductList = ({category,product}) => {


  
    return (
      <div>
        <div className="category-title">{category}</div>
        <div className="productList">
          {product.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
}

export default ProductList
