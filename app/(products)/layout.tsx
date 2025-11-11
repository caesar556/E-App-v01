import { NavBar, Footer } from "../../components/layout/";
import AuthClient from "@/components/auth/AuthClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black/90 text-white">
      <AuthClient>
        <NavBar />
        <div className="pt-20">{children}</div>
        <Footer />
      </AuthClient>
    </section>
  );
}
