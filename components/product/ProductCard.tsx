"use client"

import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { Heart, Star } from "lucide-react"

type ProductCardProp = {
  product: {
    id: string;
    imgSrc: string;
    name: string;
    point: number;
    classification: number;
    location: {
      name: string;
      city: string;
    };
  }
}

const ProductCard: FC<ProductCardProp> = ({
  product
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)} 
      className="
        w-full
        md:min-w-[387px]
        cursor-pointer
        group
        overflow-hidden
        rounded-sm
        bg-white
        hover:shadow-lg
        transition-shadow
        duration-300
        ease-in-out"
    >
      <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden
          "
        >
          <Image
            fill
            className="
              object-cover
              group-hover:scale-110
              transition
              duration-300
              ease-in-out
            "
            src={product.imgSrc}
            alt={product.name}
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <Heart />
          </div>
      </div>
      <div className="flex flex-col gap-1 text-sm p-4">
        <div className="flex justify-between text-slate-400">
          <div>{product.location.name}</div>
          <div>{product.location.city}</div>
        </div>
        <div className="text-gray-800 mb-1">{product.name}</div>
        <div className="flex items-center gap-2">
            {[...Array(product.classification)].map((_, i) => (
            <Star key={i} size={12} />
          ))}
        </div>
        <div className="">{product.point}</div>
      </div>
    </div>
  )
}

export default ProductCard
