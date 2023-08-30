import React from 'react'
import Image from 'next/Image'

const Product = ({item}) => {
    return (
      <div>
        <div>{item.name}</div>
        <div>Price : {item.price}</div>
        <div>Size : {item.size}</div>
        <Image
          src={item.image}
          alt="GFG logo served with static path of public directory"
          height="100"
          width="400"
        />
      </div>
    );
}

export default Product
