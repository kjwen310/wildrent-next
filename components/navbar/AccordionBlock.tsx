import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Link from 'next/link'
import { categoryList } from "../../staticData"

export default function AccordionBlock() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {categoryList.map((category) => (
        <AccordionItem key={category.title} value={`item-${category.title}`}>
          <AccordionTrigger>
            <div className="flex items-center gap-8">
              <Image
                src={category.imgSrc}
                alt={category.title}
                width={100}
                height={100}
                className="object-cover object-center"
              />
              <div>{category.title}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-4 pl-8">
              {category.subCategory.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
