import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-600">
        The resource you are looking for might have been moved or is no longer available. Explore the marketplace to discover verified learning materials.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
      >
        Back to home
      </Link>
    </div>
  );
}
