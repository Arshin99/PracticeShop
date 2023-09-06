'use client'
import { DATABASE } from "@/data/database";
import cartImage from '../assets/cart.jpg'
import Link from "next/Link";
import Image from 'next/Image'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import Search from './Search'
import Menu from '../assets/Menu.jpg'

const Header = () => {
  const [IsShown, setIsShown] = useState(false)

  const {cart} = useSelector(store => store.cart)
  const AllCounts = cart.reduce((init,curr) => init=init+curr.count,0)

    return (
      <div className="Header" onClick={() => setIsShown(false)}>
        <div>
          <div onMouseEnter={() => setIsShown(true)} className="menu Link">
            <Image src={Menu} width="30" height="30" className="menu-logo" />
            <p>Menu</p>
          </div>
          <div className="headerLinks">
            <div className="category-links">
              {IsShown &&
                DATABASE.categories.map((category) => (
                  <Link className="Link" href={`/${category}`}>
                    {category}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <Link className="Link" href={"/"}>
          Home
        </Link>
        <Search />
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
