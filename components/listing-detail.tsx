import Link from "next/link";
import { ShieldCheck, Share2, Truck } from "lucide-react";
import { Listing } from "@/data/listings";

export function ListingDetail({ listing }: { listing: Listing }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="aspect-[4/3] w-full rounded-3xl bg-slate-200"></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="font-display text-3xl font-semibold text-slate-900">{listing.title}</h1>
            <p className="mt-3 text-slate-600">{listing.description}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Spec label="Condition" value={listing.condition} />
              <Spec label="Category" value={listing.category} />
              <Spec label="Location" value={listing.location} />
              <Spec label="Seller" value={`${listing.sellerName} • ${listing.sellerRating.toFixed(1)}★`} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {listing.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-primary-100 bg-primary-50 p-6 text-sm text-primary-900">
            <p className="font-semibold">Somali Curriculum Alignment</p>
            <p className="mt-2 text-primary-700">
              Verified alignment with the Ministry of Education Grade 8 objectives. Suitable for public and private schools transitioning to the competency-based framework.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Price</p>
            <p className="text-3xl font-semibold text-primary-700">${listing.price.toFixed(2)}</p>
            <button className="mt-6 w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700">
              Contact seller via Firebase Chat
            </button>
            <button className="mt-3 w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-primary-200 hover:text-primary-700">
              Request invoice
            </button>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                Protected payments via Google Cloud Functions escrow
              </p>
              <p className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary-500" />
                Nationwide delivery partners with tracking dashboard
              </p>
              <p className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary-500" />
                Generate AI sourcing brief for similar items
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Procurement Toolkit</p>
            <ul className="mt-3 space-y-2">
              <li>• Firebase hosted seller verification data</li>
              <li>• Google AI Studio prompt automation for negotiation templates</li>
              <li>• Exportable CSV for donor reporting</li>
            </ul>
            <Link href="/studio" className="mt-4 inline-block text-sm font-semibold text-primary-600">
              Open AI Studio prompt library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-700">{value}</p>
    </div>
  );
}
