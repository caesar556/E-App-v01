import "../styles/globals.css";
import { ReactNode } from "react";
import { Poppins, Inter } from "next/font/google";
import AuthProvider from "../components/auth/AuthProvider";
import { getCurrentUser } from "@/lib/refresh-token/getCurrentUser";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "E-App Store",
  description: "E-App Store is a modern e-commerce platform",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <AuthProvider user={user}>
          {children}
          <Toaster richColors position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
