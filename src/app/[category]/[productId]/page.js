"use client"
import { filterById } from "@/utils/filterById";
import ProductPage from '../../../components/ProductPage'
import Image from "next/Image";
import AddButton from "../../../components/AddButton";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Page = ({params}) => {
    const id = parseInt(params.productId);
    const Product = filterById(id)[0]
    const { name, price, size, image, category } = Product;
    return (
      <div>
        <ProductPage item={Product} />
      </div>
    );
}

export default Page
