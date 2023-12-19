"use client"

import { useState } from "react"
import { useParams, useRouter, redirect } from "next/navigation"
import Container from "@/components/shared/Container"
import { productListItems, categoryList } from "@/staticData"
import ProductCard from "@/components/product/ProductCard"
import FilterPanel from "@/components/category/FilterPanel"
import { SlidersHorizontal } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Category() {
  const params = useParams()
  const router = useRouter()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categoryId = params.categoryId
  const category = categoryList.find((d) => d.id === categoryId)

  if (!categoryId || !category) {
    redirect('/')
  }

  const products = productListItems.filter((d) => d.categoryId === categoryId)

  return (
    <Container>
      <div className="flex gap-8">
        <div className="hidden md:block">
          <FilterPanel isOpen={isFilterOpen}/>
        </div>

        <div className="space-y-4 transition">
          <section className="space-y-4">
            <div className="flex justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl">{category.title}</h2>
                <div className="text-sm text-slate-400">
                  {products.length} 個商品
                </div>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <div className="text-sm text-slate-400">
                  篩選
                </div>
                <SlidersHorizontal className="hidden md:block"/>
                <div className="block md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <SlidersHorizontal />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full">
                      <FilterPanel isOpen={true} />
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
            <div className="text-md text-slate-700">
              {category.description}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>
      </div>
    </Container>
  )
}
