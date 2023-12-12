import { Button } from "@/components/ui/button"
import { AlignJustify } from 'lucide-react'
import AccordionBlock from "./AccordionBlock"

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

export default function NavHamSlide() {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="w-full">
        <AccordionBlock />
      </SheetContent>
    </Sheet>
  )
}
