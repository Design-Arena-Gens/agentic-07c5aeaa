import { Activity, BarChart2, Users } from "lucide-react";

const metrics = [
  {
    label: "Active listings",
    value: "42",
    delta: "+12%",
    description: "Week over week growth"
  },
  {
    label: "Verified buyers",
    value: "318",
    delta: "+28",
    description: "Last 30 days"
  },
  {
    label: "Fulfillment SLA",
    value: "96%",
    delta: "+4%",
    description: "Delivered under 72 hours"
  }
];

export function DashboardOverview() {
  return (
    <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
      {metrics.map((metric) => (
        <article key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-600">{metric.label}</h2>
            {metric.label === "Active listings" ? (
              <Users className="h-5 w-5 text-primary-600" />
            ) : metric.label === "Verified buyers" ? (
              <Activity className="h-5 w-5 text-success" />
            ) : (
              <BarChart2 className="h-5 w-5 text-primary-600" />
            )}
          </header>
          <p className="mt-4 text-3xl font-semibold text-slate-900">{metric.value}</p>
          <p className="mt-1 text-sm font-medium text-success">{metric.delta}</p>
          <p className="mt-1 text-xs text-slate-500">{metric.description}</p>
        </article>
      ))}
    </section>
  );
}
