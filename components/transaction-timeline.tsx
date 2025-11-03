import { CheckCircle2, Clock3, MessageSquare } from "lucide-react";

const timeline = [
  {
    id: "tn-1",
    title: "Bosaso STEM Lab order",
    status: "Delivered",
    time: "2h ago",
    summary: "15 Raspberry Pi kits dispatched via DHL Somalia",
    icon: CheckCircle2
  },
  {
    id: "tn-2",
    title: "Galmudug Reading Circle",
    status: "Awaiting payment",
    time: "5h ago",
    summary: "Invoice sent for 120 primary literacy bundles",
    icon: Clock3
  },
  {
    id: "tn-3",
    title: "Garowe STEM Bootcamp",
    status: "Chat",
    time: "8h ago",
    summary: "Negotiating logistics subsidy with donor",
    icon: MessageSquare
  }
];

export function TransactionTimeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-slate-900">Transactions</h2>
      <div className="mt-6 space-y-6">
        {timeline.map((entry) => {
          const Icon = entry.icon;
          return (
            <article key={entry.id} className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-sm">
                  <p className="font-semibold text-slate-900">{entry.title}</p>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{entry.time}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-primary-600">{entry.status}</p>
                <p className="mt-2 text-sm text-slate-600">{entry.summary}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
