import { DashboardOverview } from "@/components/dashboard-overview";
import { TransactionTimeline } from "@/components/transaction-timeline";
import { InventorySnapshot } from "@/components/inventory-snapshot";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 space-y-10">
      <div>
        <h1 className="font-display text-3xl font-semibold text-slate-900">Seller Console</h1>
        <p className="mt-2 text-slate-600">
          Monitor marketplace traction, negotiate offers, and manage fulfillment. Insights auto-sync from Firebase collections.
        </p>
      </div>
      <DashboardOverview />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <TransactionTimeline />
        <InventorySnapshot />
      </div>
    </div>
  );
}
