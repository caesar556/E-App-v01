import {
  StatsCard,
  RecentOrders,
  SalesChart,
} from "../../../components/admin/content";

import { stats } from "../../../constant/stats";

export default function AdminPage() {
  return (
    <section className="px-8">
      <h2 className="text-center text-[24px] lg:text-[32px] font-bold ">
        Welcome in Admin Dashboard
      </h2>
      <div>
        <StatsCard stats={stats} />
        <RecentOrders />
        <div className="mt-6">
          <SalesChart />
        </div>
      </div>
    </section>
  );
}
