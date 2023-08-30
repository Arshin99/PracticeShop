import React from 'react'
import Product from './Product'

const ProductList = ({category,product}) => {
    return (
      <div>
        <div className="category-title">{category}</div>
        {product.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    );
}

export default ProductList
