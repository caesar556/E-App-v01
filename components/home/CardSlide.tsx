import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CardSlide({ title, src, discount, buttonTitle }) {
  return (
    <Card className="h-full bg-purple-300 flex justify-between ">
      <div
        className="flex flex-col flex-1 
        justify-start pt-20 lg:pt-16 pl-6 lg:pl-16"
      >
        <p
          className="text-violet-800 text-[16px] 
          lg:text-[18px] font-medium mb-2"
        >
          {discount}
        </p>
        <h2
          className="text-[24px] lg:text-[38px] 
          font-extrabold"
        >
          {title}
        </h2>
        <div className="mt-4  flex  gap-3 items-center ">
          <Button
            size="lg"
            className="rounded-full font-medium 
            text-[16px]  bg-violet-800 hover:bg-violet-700 "
          >
            {buttonTitle}
          </Button>
          <Button
            className="text-[15px] 
            hover:bg-violet-400"
            variant="ghost"
          >
            learn more
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <div
        className="hidden md:flex items-center 
        justify-center w-[50%]"
      >
        <img
          className="w-[250px] lg:w-[320px] 
          h-[90%]"
          src={src}
        />
      </div>
    </Card>
  );
}
