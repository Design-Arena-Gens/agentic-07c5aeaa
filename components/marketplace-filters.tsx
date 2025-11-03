"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { categories } from "@/data/listings";
import { useState } from "react";

const logisticsPartners = ["DHL Somalia", "Hormuud Express", "SomCargos", "BRT Logistics"];

export function MarketplaceFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [priceRange, setPriceRange] = useState<number>(Number(searchParams.get("maxPrice")) || 150);

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`/marketplace?${params.toString()}`);
  };

  return (
    <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Category</h2>
        <div className="mt-4 space-y-3">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center gap-3 text-sm text-slate-600">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={searchParams.get("category") === category.value}
                onChange={(event) => updateParam("category", event.target.checked ? category.value : null)}
              />
              {category.label}
            </label>
          ))}
          <button
            type="button"
            className="text-xs font-semibold text-primary-600"
            onClick={() => updateParam("category", null)}
          >
            Clear
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Max price (${priceRange})</h2>
        <input
          type="range"
          min={10}
          max={250}
          value={priceRange}
          className="mt-4 w-full"
          onChange={(event) => {
            const value = Number(event.target.value);
            setPriceRange(value);
            updateParam("maxPrice", String(value));
          }}
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Logistics</h2>
        <div className="mt-4 space-y-3">
          {logisticsPartners.map((partner) => (
            <label key={partner} className="flex items-center gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                value={partner}
                checked={searchParams.getAll("logistics").includes(partner)}
                onChange={(event) => {
                  const params = new URLSearchParams(searchParams);
                  const existing = params.getAll("logistics");
                  if (event.target.checked) {
                    params.append("logistics", partner);
                  } else {
                    params.delete("logistics");
                    existing
                      .filter((value) => value !== partner)
                      .forEach((value) => params.append("logistics", value));
                  }
                  router.replace(`/marketplace?${params.toString()}`);
                }}
              />
              {partner}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Delivery speed</h2>
        <select
          defaultValue={searchParams.get("delivery") ?? ""}
          onChange={(event) => updateParam("delivery", event.target.value || null)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="">Any</option>
          <option value="next-day">Next day</option>
          <option value="2-3">2-3 days</option>
          <option value="courier">Courier pickup</option>
        </select>
      </div>
    </aside>
  );
}
