import React from 'react'
import Image from 'next/Image'
import Link from 'next/Link'

const Product = ({item}) => {
    return (
      <div className="product-detail">
        <div className="product-NameAndPrice">
          <div>
            <div className="product-Name">{item.name}</div>
            <div>Price : {item.price}$</div>
          </div>
          <Link className="showMore-btn" href={`${item.category}/${item.id}`}>
            Show More Detail
          </Link>
        </div>
        <Image
          src={item.image}
          alt="GFG logo served with static path of public directory"
          height="20"
          width="80"
        />
      </div>
    );
}

export default Product
