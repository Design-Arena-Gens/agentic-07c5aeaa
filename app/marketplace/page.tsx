import { Suspense } from "react";
import { MarketplaceFilters } from "@/components/marketplace-filters";
import { MarketplaceGrid } from "@/components/marketplace-grid";

export default async function MarketplacePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Marketplace</h1>
        <p className="text-slate-600">
          Browse curated listings aligned with the Somali curriculum. Filter by grade level, district, price, or logistics partner.
        </p>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[260px_1fr]">
        <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">Loading filters...</div>}>
          <MarketplaceFilters />
        </Suspense>
        <Suspense fallback={<p>Loading listings...</p>}>
          <MarketplaceGrid />
        </Suspense>
      </div>
    </div>
  );
}
