"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardSlide from "./CardSlide";

export default function CarouselPage() {
  return (
    <Carousel className=" mt-24 mb-32">
      <CarouselContent>
        <CarouselItem>
          <CardSlide
            discount="25% discount for sale"
            title="Experience Pure Sound - Your Perfect Headphones Awaits!"
            buttonTitle="shop now"
            src="/assets/category2.png"
          />
        </CarouselItem>
        <CarouselItem>
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
