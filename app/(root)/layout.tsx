import { ReactNode } from "react";
import { NavBar, Footer } from "../../components/layout/";

export const metadata = {
  title: "E-App | Home",
  description: "Welcome to E-App Store, your trusted e-commerce platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-black/90 overflow-hidden">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
