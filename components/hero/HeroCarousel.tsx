"use client"

import { Carousel } from "react-responsive-carousel"
import { Button } from '../ui/button'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"

const items = [
  {
    id: 1,
    title: "Slide 1",
    text: "",
    imageUrl: "/images/category/mountain_climbing.jpg",
  },
  {
    id: 2,
    title: "Slide 2",
    text: "",
    imageUrl: "/images/category/camping.jpg",
  },
  {
    id: 3,
    title: "Slide 3",
    text: "",
    imageUrl: "/images/category/river_tracing.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <div className='mx-auto'>
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
      >
        {items.map((item) => (
          <div key={item.id}>
            <div className="static h-[400px] w-[400px] md:h-[600px] md:w-[600px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <Button onClick={() => {}}>
                瞭解更多
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
