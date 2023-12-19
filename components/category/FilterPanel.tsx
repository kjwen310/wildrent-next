import { useState } from 'react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { categoryList } from "../../staticData"

type FilterPanelProp = {
  isOpen: boolean;
}

export default function FilterPanel({ isOpen }: FilterPanelProp) {
  const [curCategoryId, setCurCategoryId] = useState(categoryList[0].id);
  const [pointRange, setPointRange] = useState([20, 40]);

  const handleCategoryChange = (value: string) => {
    setCurCategoryId(value)
  }

  const handlePointRangeChange = (value: number[]) => {
    setPointRange(value);
  };

  return (
    <div className={`w-72 ${isOpen ? "" : "hidden"}`}>
      <div className="text-2xl border-b-2">
        篩選條件
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filter-1">
          <AccordionTrigger>
            分類
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue={categoryList[0].id} className="space-y-4" onValueChange={handleCategoryChange}>
              {categoryList.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value={category.id} id={category.id} />
                    <Label htmlFor={category.id} className="text-md">
                      {category.title}
                    </Label>
                  </div>
                  {curCategoryId === category.id && (
                    <RadioGroup className="pl-8">
                      {category.subCategory.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <RadioGroupItem value={item.id} id={item.id} />
                          <Label htmlFor={item.id} className="text-md">
                            {item.title}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="filter-2">
          <AccordionTrigger>
            點數區間
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-6">
              <div className="text-lg mb-4">
                {`${pointRange[0]} 點 - ${pointRange[1]} 點`}
              </div>
              <Slider
                value={[20, 40]}
                min={0}
                max={100}
                step={10}
                minStepsBetweenThumbs={1}
                onValueChange={handlePointRangeChange}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="filter-3">
          <AccordionTrigger>
            交換站縣市
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-4">
              <Badge variant="outline">台北市</Badge>
              <Badge variant="outline">台中市</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
