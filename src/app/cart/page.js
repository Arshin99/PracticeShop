'use client'
import { useSelector } from "react-redux";
import CartItem from '../../components/CartItem'
import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import { reset } from "@/redux/cart";
import {addToHistory} from '@/redux/history'
import {CalculatePrice} from '@/utils/totalPrice'

const Page = () => {
    const { cart } = useSelector((store) => store.cart);

    const totalPrice = useMemo(() => CalculatePrice(cart), [cart]);
    
    const dispatch = useDispatch();

    const EmptyCart = useCallback(() => {
      dispatch(reset());
    }, []);

    const Purchase = useCallback(() => {
      dispatch(addToHistory({userId:1, items:cart, totalPrice: totalPrice}));
      dispatch(reset());
    }, []);

    return (
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <div className="cartUtils">
          <button onClick={EmptyCart} className="resetBtn">
            Empty Your Cart
          </button>
          <button onClick={Purchase}>Purchase</button>
          <div className="totalPrice"> Total Price = {totalPrice}</div>
        </div>
      </div>
    );
}

export default Page
