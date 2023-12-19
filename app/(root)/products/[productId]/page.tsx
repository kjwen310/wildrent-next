"use client"

import { useState, useEffect } from "react"
import Container from "@/components/shared/Container"
import Image from "next/image"
import { productListItems, categoryList, siteList } from "@/staticData"
import { Share, Heart, Star, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import DatePicker from "@/components/product/DatePicker"
import { Range } from "react-date-range"
import { differenceInDays } from 'date-fns'
import Map from "@/components/shared/Map"
import { Button } from "@/components/ui/button"

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};


export default function Product() {
  const product = productListItems[0]
  const category = categoryList.find((d) => d.id === product.categoryId)!
  const subCategory = category.subCategory.find((d) => d.id === product.subCategoryId)!
  const site = siteList.find((d) => product.location.name === d.name)!

  const [totalPoint, setTotalPoint] = useState(product.point);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [dayCount, setDayCount] = useState(1);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const differenceDays = differenceInDays(
        dateRange.endDate,
        dateRange.startDate
      ) || 0;

      setDayCount(differenceDays + 1)
      
      if (dayCount && product.point) {
        setTotalPoint(dayCount * product.point);
      } else {
        setTotalPoint(product.point);
      }
    }
  }, [dateRange, product.point, dayCount]);

  return (
    <Container>
      <div className="flex justify-between items-center gap-8 mb-4">
        <h2 className="text-2xl">
          {product.name}
        </h2>
        <div className="flex items-center gap-1">
          <Button className="flex items-center gap-2" variant="ghost">
            <Share />
            <div className="text-sm underline">分享</div>
          </Button>
          <Button className="flex items-center gap-2" variant="ghost">
            <Heart />
            <div className="text-sm underline">儲存</div>
          </Button>
        </div>
      </div>

      <div className="w-full h-[400px] relative md:h-[600px] mb-8">
        <Image
          alt={product.name}
          fill
          className="object-center object-cover rounded-md"
          src={product.imgSrc}
        />
      </div>

      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-8">
          <div className="flex justify-between gap-2">
            <MapPin />
            {product.location.city}
          </div>
          <div className="text-md">
            {`${category.title} / ${subCategory.title}`}
          </div>
        </div>
        <div className="flex items-center gap-2">
            {[...Array(product.classification)].map((_, i) => (
            <Star key={i} fill="#ccc" size={12} />
          ))}
        </div>
      </div>


      <div className="space-y-4 block md:grid md:grid-cols-2 md:gap-12">
        <section className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl">
              商品描述
            </h3>
            <Separator />
            <div className="text-md text-slate-800">
              {product.description}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl">
              租借站位置
            </h3>
            <Separator />
            <div className="text-md">{`站點名稱：${site.name}`}</div>
            <div className="text-md">{`詳細地址：${site.address}`}</div>
            <Map siteList={[site]} center={[site.lat, site.lng]}/>
          </div>
        </section>
       
        <section className="space-y-2">
          <h3 className="text-xl">
            選擇租借日期
          </h3>
          <Separator />
          <div className="text-md">{`${product.point} / 天`}</div>
          <div className="text-md">{`共 ${dayCount} 天, ${totalPoint} 點數`}</div>
          <DatePicker
            value={dateRange}
            onChange={(value) => setDateRange(value.selection)}
          />
          <Button className="w-full">確認租借</Button>
        </section>
      </div>
    </Container>
  )
}
