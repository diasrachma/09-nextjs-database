import { Card } from '@/app/components/molecules/card';
import RevenueChart from '@/app/components/molecules/revenue-chart';
import LatestInvoices from '@/app/components/molecules/latest-invoices';
import { lusitana } from '@/app/components/atoms/fonts';

export default async function Page() {

  const totalPaidInvoices = 1000;
  const totalPendingInvoices = 500;
  const numberOfInvoices = 1500;
  const numberOfCustomers = 200;

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="md:col-span-1 flex flex-col">
          <RevenueChart />
        </div>
        <div className="md:col-span-1 flex flex-col">
          <LatestInvoices />
        </div>
      </div>
    </main>
  );
}