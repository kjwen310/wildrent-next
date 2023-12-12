"use client"
 
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { categoryList } from "../../staticData"
 
const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {categoryList.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-[1.5fr_1fr] gap-6 w-[400px] p-6 lg:w-[600px]">
                <div className="grid grid-cols-2 gap-2">
                  {category.subCategory.map((subCategory) => (
                    <ListItem key={subCategory.title} href={subCategory.href} title={subCategory.title}>
                      {subCategory.description}
                    </ListItem>
                  ))}
                </div>
                <NavigationMenuLink asChild className="h-auto">
                  <a
                    className="relative h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={category.href}
                  >
                    <Image
                      src={category.imgSrc}
                      alt={category.title}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </a>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </div>
  )
})

ListItem.displayName = "ListItem"

export default NavMenu
