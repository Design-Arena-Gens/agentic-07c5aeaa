export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12 space-y-6">
      <h1 className="font-display text-3xl font-semibold text-slate-900">Support & Partnerships</h1>
      <p className="text-slate-600">
        Need onboarding help, want to co-design a literacy drive, or ready to sponsor a STEM lab? Reach out through the channels below. Our Firebase support desk routes every ticket for rapid response.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Community support</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: support@eduswap.so</li>
            <li>Telegram: @eduswapcommunity</li>
            <li>Weekly clinics: Saturdays 10am Mogadishu time</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
          <h2 className="text-lg font-semibold text-primary-800">Partner with us</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-700">
            <li>Wholesale onboarding for publishers</li>
            <li>Donation drives with NGOs</li>
            <li>CSR sponsorships for district libraries</li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Service level commitments</p>
        <ul className="mt-2 space-y-1 list-disc pl-5">
          <li>24h response for payment queries</li>
          <li>48h verification for new sellers</li>
          <li>72h resolution target for logistics disputes</li>
        </ul>
      </div>
    </div>
  );
}
