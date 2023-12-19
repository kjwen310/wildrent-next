import { FC } from "react"
import ProductCard from "./ProductCard"
import { productListItems } from "@/staticData"

const ProductList = () => {
  return (
    <div className="flex flex-col gap-4 pl-4 sm:pl-2 md:pl-10 xl:pl-20">
      <h4 className="text-2xl">最新商品</h4>
      <div
        className="
          flex 
          flex-nowrap
          gap-6
          overflow-x-auto
          no-scrollbar
          pb-6
        "
      >
        {productListItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
