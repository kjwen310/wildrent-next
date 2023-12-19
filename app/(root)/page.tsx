"use client"

import HeroCarousel from "@/components/hero/HeroCarousel"
import ProductList from "@/components/product/ProductList"

export default function Home() {
  return (
    <>
       <HeroCarousel />
       <div className="flex flex-col gap-8 mt-8">
         <ProductList />
       </div>
    </>
  )
}
