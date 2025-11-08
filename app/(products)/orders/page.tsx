import { mockOrders } from "@/lib/data/mock-data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const statusColors = {
  completed: "bg-emerald-500/40 text-emerald-500",
  processing: "bg-violet-500/40 text-violet-500",
  shipped: "bg-orange-500/40 text-orange-500",
  pending: "bg-yellow-500/40 text-yellow-500",
};

export default function Orders() {
  return (
    <div className="mt-16 mb-20 mx-28 ">
      <Card className="bg-black/80 text-white border-violet-700  ">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl ">Orders</CardTitle>
          <CardDescription className="text-xs mt-2">
            All your orders in one place{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div className="flex justify-between  p-4" key={order.id}>
                <div className="space-y-1">
                  <p className="font-medium text-md">{order.customer}</p>
                  <p className="text-sm font-medium">{order.id}</p>
                </div>
                <div className="flex items-center gap-4 px-4">
                  <Badge
                    className={
                      statusColors[order.status as keyof typeof statusColors]
                    }
                  >
                    {order.status}
                  </Badge>
                  <p className="text-xs">total: {order.total}$</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
