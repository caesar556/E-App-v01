import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import Dashboard from "../../components/admin/layout/Dashboard";


export const metadata = {
  title: "E-App Admin Dashboard",
  description: "Admin dashboard for full control your application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SidebarProvider>
        <div>
          <Dashboard />
        </div>
        <div className="flex-1">
          <SidebarTrigger />
          {children}
        </div>
      </SidebarProvider>
    </section>
  );
}
