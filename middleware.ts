import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value;

  const url = req.nextUrl.pathname;

  const protectedRoutes = [
    "/dashboard",
    "/products",
    "/cart",
    "/orders",
    "/checkout",
  ];

  const isProtected = protectedRoutes.some((route) => url.startsWith(route));

  if (!role && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (url.startsWith("/dashboard") && role !== "admin") {
    return NextResponse.redirect(new URL("/not-authorized", req.url));
  }

  if (url.startsWith("/products") && !["admin", "seller"].includes(role)) {
    return NextResponse.redirect(new URL("/not-authorized", req.url));
  }
  if (url.startsWith("/_next") || url.startsWith("/favicon.ico")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/products/:path*",
    "/cart/:path*",
    "/orders/:path*",
    "/checkout/:path*",
  ],
};
