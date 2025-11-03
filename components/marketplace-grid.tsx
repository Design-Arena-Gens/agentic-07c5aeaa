import { cache } from "react";
import { ListingCard } from "@/components/listing-card";
import { categories, trendingListings } from "@/data/listings";

const fetchListings = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return trendingListings;
});

export async function MarketplaceGrid() {
  const listings = await fetchListings();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 text-sm text-primary-800">
        Filtering powered by Google AI Studio prompts. Tailor results to grade levels, curriculum goals, and logistics needs.
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900">Need tailored procurement?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Generate a custom sourcing brief in Google AI Studio and sync with Firebase to receive real-time supplier bids.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {categories.map((category) => (
            <li key={category.value} className="rounded-md bg-slate-100 px-3 py-2">
              {category.label} initiatives
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
