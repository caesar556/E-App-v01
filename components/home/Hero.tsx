"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardSlide from "./CardSlide";

export default function Hero() {
  return (
    <Carousel className="w-[80%] mx-auto mt-8">
      <CarouselContent className="">
        <CarouselItem className="h-[380px] ">
          <CardSlide />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
