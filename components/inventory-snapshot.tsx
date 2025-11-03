const inventory = [
  {
    id: "inv-1",
    title: "Grade 10 Chemistry (Cambridge Stream)",
    stock: 26,
    demand: "High",
    status: "Restock in 3 days"
  },
  {
    id: "inv-2",
    title: "Solar eReaders",
    stock: 12,
    demand: "Medium",
    status: "Bundled with literacy kits"
  },
  {
    id: "inv-3",
    title: "Teacher CPD Modules",
    stock: 48,
    demand: "High",
    status: "Digital download"
  }
];

export function InventorySnapshot() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold text-slate-900">Inventory snapshot</h2>
      <table className="mt-6 w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="pb-3">Item</th>
            <th className="pb-3">Stock</th>
            <th className="pb-3">Demand</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-600">
          {inventory.map((item) => (
            <tr key={item.id}>
              <td className="py-3 font-medium text-slate-700">{item.title}</td>
              <td className="py-3">{item.stock}</td>
              <td className="py-3">{item.demand}</td>
              <td className="py-3 text-xs uppercase text-primary-600">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
