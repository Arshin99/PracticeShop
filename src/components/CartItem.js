import React from 'react'
import Image from 'next/Image'
import RemoveImage from '../assets/remove.png'
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { add, decrease,remove } from "@/redux/cart";

const CartItem = ({item}) => {
    const {name,price,count,image} = item

    const dispatch = useDispatch();

    const AddToCart = useCallback(() => {
      dispatch(add(item));
    }, []);

    const DecreaseItem = useCallback(() => {
      dispatch(decrease(item));
    }, []);

    const RemoveItem = useCallback(() => {
      dispatch(remove(item));
    }, []);


    return (
      <div className="cartItem">
        <Image href={image} width="100" height="25" alt="item Image" />
        <div>
          <h2>{name}</h2>
          <p>Price : {price}</p>
        </div>
        <div>
          <button onClick={AddToCart}>+</button>
          {count}
          {count > 1 ? (
            <button onClick={DecreaseItem}>-</button>
          ) : (
            <button onClick={RemoveItem}>
                <Image href={RemoveImage} width='20' height='20' alt='X'/>
            </button>
          )}
        </div>
      </div>
    );
}

export default CartItem
