'use client'
import { DATABASE } from "@/data/database";
import cartImage from '../assets/cart.jpg'
import Link from "next/Link";
import Image from 'next/Image'
import {useSelector} from 'react-redux'
import Search from './Search'

const Header = () => {

  const {cart} = useSelector(store => store.cart)
  const AllCounts = cart.reduce((init,curr) => init=init+curr.count,0)

    return (
      <div className="Header">
        <div>
          <Link className="Link" href={"/"}>
            Home
          </Link>
          {DATABASE.categories.map((category) => (
            <Link className="Link" href={`/${category}`}>
              {category}
            </Link>
          ))}
        </div>
        <Search/>
        <div className="cartLink-container">
          <Link href={"/history"} className="Link">
            Shopping History
          </Link>
          <Link className="Link cart-logo-container" href={"/cart"}>
            <Image
              src={cartImage}
              width="30"
              height="30"
              className="cart-logo"
            />
            Cart ({AllCounts})
          </Link>
        </div>
      </div>
    );
}

export default Header
