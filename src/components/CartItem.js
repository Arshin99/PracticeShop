import React from 'react'
import Image from 'next/Image'
import RemoveImage from "../assets/RemoveImage.png";
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
        <Image src={image} width="100" height="25" alt="item Image" />
        <div>
          <h2>{name}</h2>
          <p>Price : {price}$</p>
        </div>
        <div>
          <button onClick={AddToCart} className="SmallBtn PlusBtn">
            +
          </button>
          {count}
          {count > 1 ? (
            <button onClick={DecreaseItem} className="SmallBtn MinusBtn">
              -
            </button>
          ) : (
            <button onClick={RemoveItem} className="SmallBtn">
              <Image src={RemoveImage} width="30" height="30" alt="X" />
            </button>
          )}
        </div>
      </div>
    );
}

export default CartItem
