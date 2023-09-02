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
    

    const isNotEmptyCart = cart.length !== 0

    const dispatch = useDispatch();

    const EmptyCart = useCallback(() => {
      dispatch(reset());
    }, []);

    const Purchase = useCallback(() => {
      
      dispatch(addToHistory({userId:1, items:cart, totalPrice: totalPrice}));
      dispatch(reset());
      alert('Purchased successfully !')
      
    }, [totalPrice,cart]);

    return (
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        {isNotEmptyCart ? 
        <div className="cartUtils">
          <button onClick={EmptyCart} className="resetBtn">
            Empty Your Cart
          </button>
          <button onClick={Purchase} className="purchaseBtn">
            Purchase
          </button>
          <div className="totalPrice"> Total Price = {totalPrice}$</div>
        </div>:
        <div className='emptyCart'>Your Cart is currently empty</div>}
        
      </div>
    );
}

export default Page
