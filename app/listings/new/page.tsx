import { ListingForm } from "@/components/listing-form";

export default function NewListingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold text-slate-900">List an education resource</h1>
      <p className="mt-3 text-slate-600">
        Connect with families and learning centers across Somalia by posting your textbooks, STEM hardware, or digital learning kits. AI-powered prompts will optimize your listing details.
      </p>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <ListingForm />
      </div>
    </div>
  );
}
