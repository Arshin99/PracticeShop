import BlueNike from '../assets/BlueNike.jpg'
import RedNike from '../assets/RedNike.webp'
import WhiteShirt from '../assets/WhiteShirt.jpg'
import BlackBag from '../assets/blackBag.webp'


export const SHOE = 'Shoes';
export const BAG = 'Bags';
export const SHIRT = 'Shirts';

export const CATEGORIES = [SHOE,BAG,SHIRT]

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
];

export const DATABASE = {
    categories : CATEGORIES,
    products: PRODUCTS
}