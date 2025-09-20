import { Card } from "@/components/ui/card";


export default function CardSlide() {
  return (
    <Card className="h-full bg-gray-300 flex justify-between ">
      <div className="border-2 border-red-700 flex-1">
        left
      </div>
      <div>right</div>
    </Card>

  )
} 