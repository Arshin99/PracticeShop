import React from 'react'
import { DATABASE } from "@/data/database";
import Link from "next/Link";

const Header = () => {
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
        <div>
          <Link className="Link" href={"/cart"}>
            Cart
          </Link>
        </div>
      </div>
    );
}

export default Header
