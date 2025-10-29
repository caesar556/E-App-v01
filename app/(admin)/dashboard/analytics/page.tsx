"use client";

import { StatsCard, SalesChart } from "../../../../components/admin/content";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { stats } from "../../../../constant/stats";

import { mockSalesData } from "@/lib/data/mock-data";

export default function Analytics() {
  return (
    <div className="px-8">
      <StatsCard stats={stats} />

      <div className="mt-6 space-y-4">
        <SalesChart />

        <div className="">
          <Card className="glass">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Orders Overview</CardTitle>
              <CardDescription>Monthly order volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockSalesData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#7F00FF" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
