
import Image from 'next/image'
import {DATABASE} from '@/data/database'
import {filterByCategory} from '@/utils/filterByCategory'
import ProductList from '../components/ProductList'
import HomePage from '../assets/HomePage.jpg'
import Link from 'next/Link'

export default function Home() {

  return (
    <div className="HomePage">
      <div className="Home-Container">
        <h1 className="Home-Title">Online Shopping</h1>
        <p className="Home-desc">Find all your favorite supplies easily !</p>
      </div>
      <Image src={HomePage} width="700" height="500" className="Home-Image" />
    </div>
  );
}
