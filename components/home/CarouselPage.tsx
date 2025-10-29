"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardSlide from "./CardSlide";

export default function CarouselPage() {
  return (
    <Carousel className="w-[80%] mx-auto mt-8">
      <CarouselContent>
        <CarouselItem className="h-[400px] ">
          <CardSlide
            discount="25% discount for sale"
            title="Experience Pure Sound - Your Perfect Headphones Awaits!"
            buttonTitle="shop now"
            src="/assets/category1.png"
          />
        </CarouselItem>
        <CarouselItem className="h-[400px] ">
          <CardSlide
            discount="26% discount for sale"
            title="Experience Pure Sound - Your Perfect Headphones Awaits!"
            buttonTitle="shop now"
            src="/assets/category2.png"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
