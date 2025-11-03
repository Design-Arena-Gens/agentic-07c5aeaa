import Link from "next/link";
import { Star } from "lucide-react";
import { Listing } from "@/data/listings";
import { cn } from "@/lib/utils";

interface ListingCardProps {
  listing: Listing;
  variant?: "default" | "compact";
}

export function ListingCard({ listing, variant = "default" }: ListingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        variant === "compact" ? "sm:flex-row sm:items-center" : ""
      )}
    >
      <div className="relative aspect-[4/3] w-full bg-slate-200 sm:w-48">
        <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">
          Image coming soon
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
            {listing.category}
          </span>
          {listing.verified ? (
            <span className="flex items-center gap-1 text-xs font-semibold text-success">
              <Star className="h-4 w-4" />
              Verified
            </span>
          ) : null}
        </div>
        <Link href={`/listings/${listing.id}`} className="text-lg font-semibold text-slate-900">
          {listing.title}
        </Link>
        <p className="text-sm text-slate-600">{listing.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-primary-700">${listing.price}</p>
          <div className="text-xs text-slate-500">
            {listing.location} • {new Date(listing.createdAt).toLocaleDateString()}
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{listing.sellerName}</span>
          <span>{listing.sellerRating.toFixed(1)} ★ rating</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {listing.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
