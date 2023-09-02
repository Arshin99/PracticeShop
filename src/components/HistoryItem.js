import React from 'react'
import Image from "next/Image";

const HistoryItem = ({item}) => {
    const {name,size,price,image,count}=item
    return (
      <div className='historyItem'>
        <Image src={image} width="60" height="15" alt="item Image" />
        <div>
          <p>{name}</p>
          <p>Size : {size}</p>
        </div>
        <div>
          <p>Price : {price}</p>
          <p>Count : {count}</p>
        </div>
      </div>
    );
}

export default HistoryItem
