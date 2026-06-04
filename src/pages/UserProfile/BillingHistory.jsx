import { Download } from "lucide-react";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPaymentsHistory } from "@/lib/api/payment.api";
import useBookingStore from "@/lib/store/bookingStore";

const statusStyles = {
  Paid: "bg-green-500/15 text-green-400",
  Pending: "bg-yellow-500/15 text-yellow-400",
  Failed: "bg-red-500/15 text-red-400",
  Confirmed: "bg-green-500/15 text-green-400",
};

export default function BillingHistory() {

  const initBookingsFromStorage = useBookingStore(
    (state) => state.initBookingsFromStorage,
  );
  const storeBookings = useBookingStore((state) => state.bookings);


  const [, setForceUpdate] = React.useState(0);

  useEffect(() => {

    const unsubscribe = useBookingStore.subscribe(() => {
      setForceUpdate((k) => k + 1);
    });

    initBookingsFromStorage();
    return () => unsubscribe();
  }, [initBookingsFromStorage]);


  const localStorageBookings = (() => {
    try {
      const stored = localStorage.getItem("userBookings");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  })();


  const allStoreBookings =
    storeBookings?.length > 0 ? storeBookings : localStorageBookings;

  const { data: fetchedInvoices, isLoading } = useQuery({
    queryKey: ["paymentsHistory"],
    queryFn: getPaymentsHistory,
  });


  const invoicesArray = Array.isArray(fetchedInvoices) ? fetchedInvoices : [];


  const bookingInvoices = allStoreBookings.map((b) => ({
    id: b.id,
    date: b.date || new Date(b.bookedAt).toLocaleDateString(),
    description:
      typeof b.package === "object"
        ? `${b.package?.name || b.package} - ${b.trainer?.name || b.trainer}`
        : `${b.package} - ${b.trainer?.name || b.trainer}`,
    amount: b.package?.price || b.price || "TBD",
    status: b.status || "Confirmed",
    isFromStore: true,
  }));


  const allInvoices = [...invoicesArray, ...bookingInvoices];

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

      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : allInvoices && allInvoices.length > 0 ? (
        <div className="border border-(--gray-color) rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 px-6 py-4 border-b border-(--gray-color) bg-(--color-raised)/40">
            {["Invoice", "Date", "Description", "Amount", "Status"].map((h) => (
              <span
                key={h}
                className="text-xs font-bold uppercase tracking-widest text-(--gray-color)"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="divide-y divide-(--gray-color)">
            {allInvoices.map((inv) => (
              <div
                key={inv.id}
                className="grid grid-cols-5 items-center px-6 py-5 hover:bg-primary/5 transition-colors duration-200 group"
              >
                <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                  {inv.id}
                </span>
                <span className="text-sm text-(--gray-color)">{inv.date}</span>
                <span className="text-sm text-white font-medium">
                  {inv.description}
                </span>
                <span className="text-sm font-bold text-white">
                  {inv.amount}
                </span>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyles[inv.status] || "bg-gray-500/15 text-gray-400"}`}
                  >
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
      ) : (
        <div className="text-white text-center py-10">
          No billing history found.
        </div>
      )}
    </div>
  );
}
