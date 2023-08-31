import React from 'react'
import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {add} from '@/redux/cart'

const AddButton = ({ product }) => {
  const dispatch = useDispatch();

  const AddToCart = useCallback(() => {
    dispatch(add(product));
  }, []);
  return <button onClick={AddToCart} className='addBtn'>Add To Cart</button>;
};

export default AddButton
