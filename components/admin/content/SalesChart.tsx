"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { mockSalesData } from "@/lib/data/mock-data";

export default function SalesChart() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sales Overview</CardTitle>
        <CardDescription className="text-xs">
          Monthly performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer className="p-3" width="100%" height={300}>
          <LineChart data={mockSalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className="text-xs font-medium" dataKey="month" />
            <YAxis className="text-xs font-medium" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="purple"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
