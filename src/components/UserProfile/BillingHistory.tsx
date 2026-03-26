interface Invoice {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
}

const invoices: Invoice[] = [
  {
    id: "INV-2024-010",
    date: "Oct 01, 2024",
    description: "Single Pack",
    amount: "150 EGY",
    status: "Paid",
  },
];

const statusStyles = {
  Paid: "bg-green-500/20 text-green-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Failed: "bg-red-500/20 text-red-400",
};

export default function BillingHistory() {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div className="border-b border-(--gray-color) rounded-xl overflow-hidden">
        <div className="bg-[#FF4D4D26] rounded-t-xl px-4 py-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Billing History
          </h2>
        </div>

        {/* Table */}
        <div className="p-4 sm:p-6">
          <table className="w-full">
            <thead>
              <tr className="text-white font-semibold text-xl text-left">
                <th className="pb-4">Invoice</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--gray-color)">
              {invoices.map((inv) => (
                <tr key={inv.id} className="text-(--gray-color)">
                  <td className="py-4">{inv.id}</td>
                  <td className="py-4">{inv.date}</td>
                  <td className="py-4">{inv.description}</td>
                  <td className="py-4">{inv.amount}</td>
                  <td className="py-4">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${statusStyles[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
