import { mockStats } from "@/lib/data/mock-data";

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Revenue",
    value: `$${mockStats.totalRevenue.toLocaleString()}`,
    change: mockStats.revenueChange,
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Orders",
    value: mockStats.totalOrders.toLocaleString(),
    change: mockStats.ordersChange,
    icon: ShoppingCart,
    color: "text-sky-600",
  },
  {
    title: "Total Products",
    value: mockStats.totalProducts.toLocaleString(),
    change: mockStats.productsChange,
    icon: Package,
    color: "text-orange-600",
  },
  {
    title: "Total Users",
    value: mockStats.totalUsers.toLocaleString(),
    change: mockStats.usersChange,
    icon: Users,
    color: "text-purple-600",
  },
];

export default function StatsCard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const changeIcon = stat.change > 0;
        return (
          <div key={stat.title}>
            <Card>
              <CardHeader className="flex gap-3">
                <CardTitle>{stat.title}</CardTitle>
                <Icon size={22} className={`${stat.color}`} />
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl mb-3" >{stat.value}</h3>
                <div className="flex items-center p-3">
                  <span className="mr-3 ">{Math.abs(stat.change)}%</span>
                  {changeIcon ? (
                    <TrendingUp size={22} className="text-green-500" />
                  ) : (
                    <TrendingDown size={22} className="text-red-600" />
                  )}
                  <span className="text-sm ml-2 font-medium">from Last month </span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
