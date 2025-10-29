import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TrendingUp, TrendingDown } from "lucide-react";

const colorClasses = {
  revenue: "text-green-600",
  orders: "text-sky-600",
  products: "text-orange-600",
  users: "text-violet-600",
};

export default function StatsCard({ stats }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
      {stats.map((stat: any) => {
        const Icon = stat.icon;
        const changeIcon = stat.change > 0;
        return (
          <div key={stat.title}>
            <Card>
              <CardHeader className="flex gap-3">
                <CardTitle>{stat.title}</CardTitle>
                <Icon size={22} className={colorClasses[stat.type]} />
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl mb-3">{stat.value}</h3>
                <div className="flex items-center p-3">
                  <span className="mr-3 ">{Math.abs(stat.change)}%</span>
                  {changeIcon ? (
                    <TrendingUp size={22} className="text-green-500" />
                  ) : (
                    <TrendingDown size={22} className="text-red-600" />
                  )}
                  <span className="text-sm ml-2 font-medium">
                    from Last month{" "}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
