import { NavBar, Footer } from "../../components/layout/";


export const metadata = {
  title: "E-App Store",
  description: "Shopping with best deals and offers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black/90 text-white">
      <NavBar />
      <div className="pt-20" >{children}</div>
      <Footer />
    </section>
  );
}
