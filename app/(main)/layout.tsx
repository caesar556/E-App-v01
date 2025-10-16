import "../../styles/globals.css";
import { ReactNode } from "react";
import { NavBar, Footer } from "../../components/layout/";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-purple-200">
        <NavBar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
