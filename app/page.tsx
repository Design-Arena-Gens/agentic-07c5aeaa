import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, Layers3, ShieldCheck } from "lucide-react";
import { categories, trendingListings } from "@/data/listings";
import { ListingCard } from "@/components/listing-card";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100">
      <section className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-12 px-6 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">
            <BadgeCheck className="h-4 w-4" />
            #1 Learning Marketplace in Somalia
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Unlock Access to Quality Learning Materials Across Somalia
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            EduSwap Somalia connects students, parents, and educators to buy, sell, and donate textbooks, STEM kits, and digital resources built for the Somali curriculum.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/marketplace"
              className="flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-700"
            >
              Browse Marketplace
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/listings/new"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-primary-200 hover:text-primary-700"
            >
              Create a Listing
            </Link>
          </div>
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
            <FeatureStat label="Verified sellers" value="320+" icon={<ShieldCheck className="h-5 w-5" />} />
            <FeatureStat label="Districts served" value="18" icon={<Globe2 className="h-5 w-5" />} />
            <FeatureStat label="Average delivery" value="48 hrs" icon={<Layers3 className="h-5 w-5" />} />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="grid w-full max-w-md gap-4">
            {trendingListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold text-slate-900">Built for the Somali education ecosystem</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Discover curriculum-aligned resources, rural-ready tech, and community-trusted sellers under one roof. Search by region, grade level, or initiative.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div key={category.value} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-primary-700">{category.label}</h3>
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                <Link
                  href={`/marketplace?category=${encodeURIComponent(category.value)}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl rounded-3xl bg-primary-900 px-6 py-12 text-white">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold">Empower local learning circles</h2>
              <p className="mt-3 text-primary-50">
                Run literacy drives, STEM bootcamps, or scholarship programs on EduSwap. Manage inventory, host donation campaigns, and unlock sponsor analytics.
              </p>
            </div>
            <div className="space-y-4">
              <HighlightBullet title="Circular economy for learning" description="Keep materials in circulation through buy, rent, and donate flows." />
              <HighlightBullet title="Trust and safety" description="Verified sellers, escrow payments, and community reviews ensure confident transactions." />
              <HighlightBullet title="Nationwide reach" description="Logistics partnerships with Mogadishu, Hargeisa, Bosaso, and Garowe couriers." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureStat({
  label,
  value,
  icon
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        <p className="text-lg font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function HighlightBullet({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-primary-100">{description}</p>
    </div>
  );
}
