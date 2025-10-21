export const mockStats = {
  totalRevenue: 45231.89,
  totalOrders: 2350,
  totalProducts: 156,
  totalCustomers: 1842,
  totalUsers: 1842,
  revenueChange: 20.1,
  ordersChange: 15.3,
  productsChange: 5.2,
  customersChange: 12.5,
  usersChange: 12.5,
};

export const mockOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    total: 299.99,
    status: "completed",
    date: "2024-01-15",
    items: [{ name: "Smart Watch", quantity: 1, price: 299.99 }],
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    total: 149.98,
    status: "processing",
    date: "2024-01-14",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: 99.99 },
      { name: "Laptop Stand", quantity: 1, price: 49.99 },
    ],
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    total: 189.98,
    status: "shipped",
    date: "2024-01-13",
    items: [
      { name: "Mechanical Keyboard", quantity: 1, price: 149.99 },
      { name: "USB-C Hub", quantity: 1, price: 39.99 },
    ],
  },
  {
    id: "ORD-004",
    customer: "Alice Williams",
    email: "alice@example.com",
    total: 99.99,
    status: "pending",
    date: "2024-01-12",
    items: [{ name: "Wireless Headphones", quantity: 1, price: 99.99 }],
  },
];

export const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "customer",
    status: "active",
    joinedDate: "2023-06-15",
    totalOrders: 12,
    totalSpent: 1299.88,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "customer",
    status: "active",
    joinedDate: "2023-08-22",
    totalOrders: 8,
    totalSpent: 899.92,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "customer",
    status: "inactive",
    joinedDate: "2023-03-10",
    totalOrders: 3,
    totalSpent: 299.97,
  },
];

export const mockCategories = [
  {
    id: "1",
    name: "Electronics",
    productCount: 45,
    description: "Electronic devices and gadgets",
  },
  {
    id: "2",
    name: "Accessories",
    productCount: 32,
    description: "Tech accessories and peripherals",
  },
  {
    id: "3",
    name: "Clothing",
    productCount: 28,
    description: "Apparel and fashion items",
  },
];

export const mockSalesData = [
  { month: "Jan", sales: 4000, orders: 240 },
  { month: "Feb", sales: 3000, orders: 180 },
  { month: "Mar", sales: 5000, orders: 300 },
  { month: "Apr", sales: 4500, orders: 270 },
  { month: "May", sales: 6000, orders: 360 },
  { month: "Jun", sales: 5500, orders: 330 },
];
