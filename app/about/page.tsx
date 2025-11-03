export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12 space-y-6">
      <h1 className="font-display text-3xl font-semibold text-slate-900">About EduSwap Somalia</h1>
      <p className="text-slate-600">
        EduSwap Somalia is a social enterprise marketplace that keeps learning resources circulating across Somali regions. We partner with local schools, NGOs, and tech hubs to digitize procurement, reduce textbook shortages, and empower community-driven education.
      </p>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="font-display text-2xl font-semibold text-slate-900">Our mission</h2>
        <p className="text-sm text-slate-600">
          Foster equitable access to learning tools through circular supply chains, AI-enabled sourcing, and inclusive financing tailored to Somali learners.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
          <h3 className="font-semibold text-primary-800">Co-creation with educators</h3>
          <p className="mt-2 text-sm text-primary-700">
            Teacher councils across Mogadishu, Hargeisa, Kismayo, and Garowe inform platform priorities, ensuring alignment with curriculum reforms.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800">Responsible innovation</h3>
          <p className="mt-2 text-sm text-slate-600">
            Privacy-first design, ethical data use, and community accountability guides every integration from Gemini prompts to Firebase workflows.
          </p>
        </article>
      </div>
    </div>
  );
}
