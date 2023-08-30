import React from 'react'
import {filterByCategory} from '@/utils/filterByCategory'
import ProductList from '../../components/ProductList' 

const Page = ({params}) => {

    const {category} = params
    const products = filterByCategory(category);

    return (
        <div>
            <ProductList category={category} product={products}/>
        </div>
    )
}

export default Page
