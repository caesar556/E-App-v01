import { DollarSign, ShoppingCart, Package, Users } from "lucide-react";

import { mockStats } from "@/lib/data/mock-data";

export const stats = [
  {
    title: "Total Revenue",
    value: `$${mockStats.totalRevenue.toLocaleString()}`,
    change: mockStats.revenueChange,
    icon: DollarSign,
    type: "revenue",
  },
  {
    title: "Total Orders",
    value: mockStats.totalOrders.toLocaleString(),
    change: mockStats.ordersChange,
    icon: ShoppingCart,
    type: "orders",
  },
  {
    title: "Total Products",
    value: mockStats.totalProducts.toLocaleString(),
    change: mockStats.productsChange,
    icon: Package,
    type: "products",
  },
  {
    title: "Total Users",
    value: mockStats.totalUsers.toLocaleString(),
    change: mockStats.usersChange,
    icon: Users,
    type: "users",
  },
];
