'use client'
import { useSelector } from "react-redux";
import CartItem from '../../components/CartItem'

const Page = () => {
    const { cart } = useSelector((store) => store.cart);
    
    return (
        <div>
            {cart.map((item)=>
            <CartItem item={item} key={item.id}/>)}
        </div>
    )
}

export default Page
