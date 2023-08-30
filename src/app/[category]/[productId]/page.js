import React from 'react'
import { filterById } from "@/utils/filterById";
import ProductPage from '../../../components/ProductPage'

const Page = ({params}) => {
    const id = parseInt(params.productId);
    const Product = filterById(id)[0]
    return (
      <div>
        <ProductPage
          name={Product.name}
          price={Product.price}
          size={Product.size}
          image={Product.image}
          category={Product.category}
        />
      </div>
    );
}

export default Page
