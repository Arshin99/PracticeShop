import React from 'react'
import HistoryItem from './HistoryItem'

const HistoryList = ({list}) => {

    const {id,items,totalPrice} = list

    return (
      <div className="historyList">
        <div className="historyItems-title">Items :</div>
        {items.map((item) => (
          <HistoryItem item={item} />
        ))}
        <div>Total Price : {totalPrice}</div>
      </div>
    );
}

export default HistoryList
