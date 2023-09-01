'use client'
import { useSelector } from "react-redux";
import CartItem from '../../components/CartItem'
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { reset } from "@/redux/cart";

const Page = () => {
    const { cart } = useSelector((store) => store.cart);
    
    const dispatch = useDispatch();

    const EmptyCart = useCallback(() => {
      dispatch(reset());
    }, []);
    return (
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <button onClick={EmptyCart} className='resetBtn'>Empty Your Cart</button>
      </div>
    );
}

export default Page
