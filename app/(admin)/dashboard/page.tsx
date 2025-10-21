import { StatsCard, RecentOrders } from "../../../components/admin/content";

export default function AdminPage() {
  return (
    <section className="p-5">
      <h2 className="text-center text-[24px] lg:text-[32px] font-bold ">
        Welcome in Admin Dashboard
      </h2>
      <div>
        <StatsCard />
        <RecentOrders />
      </div>
    </section>
  );
}
