import BlueNike from '../assets/BlueNike.jpg'
import RedNike from '../assets/RedNike.webp'
import WhiteShirt from '../assets/WhiteShirt.jpg'
import BlackBag from '../assets/blackBag.webp'
import BlackAdidas from '../assets/BlackAdidas.webp'
import MenPartyShoes from '../assets/MenPartyShoes.webp'
import WomenPartyShoes from '../assets/WomenPartyShoes.webp'
import WhiteAdidas from '../assets/WhiteAdidas.jpg'

export const SHOE = 'Shoes';
export const BAG = 'Bags';
export const SHIRT = 'Shirts';

export const CATEGORIES = [SHOE, BAG, SHIRT];

export const PRODUCTS = [
  {
    id: 1,
    name: "Blue Nike",
    category: SHOE,
    price: 150,
    size: "45",
    image: BlueNike,
  },
  {
    id: 2,
    name: "Red Nike",
    category: SHOE,
    price: 170,
    size: "44",
    image: RedNike,
  },
  {
    id: 3,
    name: "White Dress",
    category: SHIRT,
    price: 250,
    size: "XL",
    image: WhiteShirt,
  },
  {
    id: 4,
    name: "Black School Bag",
    category: BAG,
    price: 200,
    size: "Average",
    image: BlackBag,
  },
  {
    id: 5,
    name: "Black Adidas",
    category: SHOE,
    price: 230,
    size: "52",
    image: BlackAdidas,
  },
  {
    id: 6,
    name: "White Adidas",
    category: SHOE,
    price: 235,
    size: "53",
    image: WhiteAdidas,
  },
  {
    id: 7,
    name: "Men's Party Shoe",
    category: SHOE,
    price: 320,
    size: "53",
    image: MenPartyShoes,
  },
  {
    id: 8,
    name: "Women's Party Shoe",
    category: SHOE,
    price: 400,
    size: "53",
    image: WomenPartyShoes,
  },
];

export const DATABASE = {
    categories : CATEGORIES,
    products: PRODUCTS
}