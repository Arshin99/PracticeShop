import React from 'react'
import Image from 'next/Image'

const ProductPage = ({name,price,size,image,category}) => {
    return (
      <div className="ProductPage-container">
        <div className="ProductPage rounded-md">
          <div className="text-container">
            <h1 className="text ProductTitle">{name}</h1>
            <h3 className="text ProductDetail">Price = {price}$</h3>
            <h3 className="text ProductDetail">Category = {category}</h3>
            <h3 className="text ProductDetail">Size = {size}</h3>
          </div>
          <Image
            src={image}
            alt="GFG logo served with static path of public directory"
            height="80"
            width="320"
            className="rounded-md"
          />
        </div>
      </div>
    );
}

export default ProductPage
