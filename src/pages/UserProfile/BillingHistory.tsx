import { Download } from "lucide-react";

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
    amount: "150 EGP",
    status: "Paid",
  },
  {
    id: "INV-2024-009",
    date: "Sep 01, 2024",
    description: "Single Pack",
    amount: "150 EGP",
    status: "Paid",
  },
  {
    id: "INV-2024-008",
    date: "Aug 01, 2024",
    description: "Monthly Bundle",
    amount: "350 EGP",
    status: "Failed",
  },
  {
    id: "INV-2024-007",
    date: "Jul 01, 2024",
    description: "Monthly Bundle",
    amount: "350 EGP",
    status: "Pending",
  },
];

const statusStyles = {
  Paid: "bg-green-500/15 text-green-400",
  Pending: "bg-yellow-500/15 text-yellow-400",
  Failed: "bg-red-500/15 text-red-400",
};

export default function BillingHistory() {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Billing History
        </h2>
        <p className="text-sm text-(--gray-color) mt-1 p-1">
          View and download your past invoices
        </p>
      </div>

      <div className="border border-(--gray-color) rounded-2xl overflow-hidden">
        <div className="grid grid-cols-5 px-6 py-4 border-b border-(--gray-color) bg-(--color-raised)/40">
          {["Invoice", "Date", "Description", "Amount", "Status"].map((h) => (
            <span
              key={h}
              className="text-xs font-bold uppercase tracking-widest text-(--gray-color)">
              {h}
            </span>
          ))}
        </div>

        <div className="divide-y divide-(--gray-color)">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="grid grid-cols-5 items-center px-6 py-5 hover:bg-primary/5 transition-colors duration-200 group">
              <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                {inv.id}
              </span>
              <span className="text-sm text-(--gray-color)">{inv.date}</span>
              <span className="text-sm text-white font-medium">
                {inv.description}
              </span>
              <span className="text-sm font-bold text-white">{inv.amount}</span>
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyles[inv.status]}`}>
                  {inv.status}
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer">
                  <Download size={14} className="text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
