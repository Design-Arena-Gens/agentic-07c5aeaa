import { CopyButton } from "@/components/ui/copy-button";

const promptContent = `You are building a cross-platform app called "EduSwap Somalia" using Google AI Studio's App Builder. The goal is to launch a Vinted-style marketplace for buying, selling, and donating educational materials in Somalia.

Focus areas:
1. Authentication & Identity
   - Require Firebase Authentication (Email/Password + Google Sign-In)
   - Enforce profile completeness with avatar, role (student/parent/educator), district, and school affiliation
   - Flag sellers for manual verification workflows (upload ID, ministry letter)

2. Listings Management
   - Allow image uploads (GCS bucket) and auto-tag resources with Gemini (grade level, subject, competency alignment)
   - Support price, rental, and donation modes with condition grading rubric
   - Batch import via CSV or Google Sheets for NGOs handling bulk stock

3. Search & Discovery
   - Filter by grade bands (KG, Primary, Secondary, TVET)
   - Toggle new vs. gently used stock, logistic corridors, and SDG-aligned initiatives
   - Highlight trending campaigns (back-to-school, Ramadan donations)

4. Transactions & Logistics
   - Integrate M-Pesa and ZaadPay via Firebase Extensions
   - Offer delivery estimates via Somali courier APIs (DHL Somalia, SomCargos, Gaalkacyo Express)
   - Provide pickup points and track delivery status updates in Firestore

5. Community Trust & Safety
   - Implement ratings, reviews, and escalation flows with Cloud Functions
   - Run AI moderation on images/descriptions to flag inappropriate content
   - Offer dispute resolution chat with templated prompts for mediators

6. Analytics & Impact
   - Dashboard widgets for transactions, learners reached, and donation impact by district
   - Export impact reports to PDF with branded design
   - Track conversion funnels (views → chats → purchases) for marketing insights

7. Localization & Accessibility
   - Provide bilingual UI (Somali + English) with toggle
   - Optimize for low-bandwidth with offline-first caching (Firebase + PWAs)
   - Use warm coastal-inspired palette (#1c76ff, #ffb703) and friendly rounded typography

Deliverables (JSON format):
- app_structure: navigation map with screens, components, and data bindings
- firebase_config: list of collections, documents, security rules, and Cloud Functions triggers
- auth_flows: step-by-step flows for registration, login, verification, and recovery
- ai_prompts: Gemini prompts for auto-tagging, moderation, and copywriting
- ui_copy: marketing language for hero sections, CTAs, onboarding tips (both English & Somali)
- testing_plan: QA scenarios covering Firebase rules, payments, logistics
- deployment_plan: instructions for hosting on Firebase, connecting domain, and handing off to Vercel or Next.js frontend

Ensure the output is production-oriented, ready for implementation, and tailored to the Somali education ecosystem.`;

export function StudioPrompt() {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Google AI Studio Prompt</h1>
        <p className="text-sm text-slate-600">
          Copy the refined brief into aistudio.google.com to generate an AI-assisted build plan that integrates Firebase, Gemini, and Somali-centric logistics.
        </p>
      </header>
      <div className="flex justify-end">
        <CopyButton text={promptContent} />
      </div>
      <pre className="max-h-[640px] overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-900/95 p-6 text-sm text-slate-100">
{promptContent}
      </pre>
    </section>
  );
}
