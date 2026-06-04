import { Check, Package, ArrowUpRight } from "lucide-react";
import ProgressBar from "../../components/common/UserProfile/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfilePackages, getUserPurchases } from "@/lib/api/profile.api";
import { getBookings } from "@/lib/api/booking.api";
import useBookingStore from "@/lib/store/bookingStore";

export default function MyPackages() {
  const navigate = useNavigate();


  const storeBookings = useBookingStore((state) => state.bookings);
  const initBookingsFromStorage = useBookingStore(
    (state) => state.initBookingsFromStorage,
  );


  useEffect(() => {
    initBookingsFromStorage();
  }, [initBookingsFromStorage]);


  const {
    data: packages,
    isLoading: packagesLoading,
  } = useQuery({
    queryKey: ["profilePackages"],
    queryFn: getProfilePackages,
  });


  const {
    data: bookings,
    isLoading: bookingsLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });


  const {
    data: userPurchases,
    isLoading: purchasesLoading,
  } = useQuery({
    queryKey: ["userPurchases"],
    queryFn: getUserPurchases,
  });


  const allStoreBookings = storeBookings;

  const isLoading = packagesLoading || bookingsLoading || purchasesLoading;


  let allItems = [];
  if (packages && Array.isArray(packages)) {
    allItems = [
      ...allItems,
      ...packages.map((p) => ({ ...p, source: "packages" })),
    ];
  }
  if (bookings && Array.isArray(bookings)) {
    allItems = [
      ...allItems,
      ...bookings.map((b) => ({ ...b, source: "bookings" })),
    ];
  }
  if (userPurchases && Array.isArray(userPurchases)) {
    allItems = [
      ...allItems,
      ...userPurchases.map((p) => ({ ...p, source: "userPurchases" })),
    ];
  }
  if (allStoreBookings && Array.isArray(allStoreBookings)) {
    allItems = [
      ...allItems,
      ...allStoreBookings.map((b) => ({
        id: b.id,
        name:
          typeof b.package === "object"
            ? b.package?.name || b.package
            : b.package || b.package_name,
        status: b.status,
        expiryDate: b.date,
        sessionsRemaining:
          typeof b.package === "object" ? b.package?.sessions || 0 : 0,
        totalSessions:
          typeof b.package === "object" ? b.package?.sessions || 0 : 0,
        source: "store",
      })),
    ];
  }

  if (isLoading) {
    return <div className="text-white mx-10">Loading packages...</div>;
  }

  if (allItems.length === 0) {
    return (
      <div className="flex flex-col gap-5 mx-4 sm:mx-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          My Packages
        </h2>

        <div className="border border-(--gray-color) rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-(--gray-color)/10 flex items-center justify-center mx-auto mb-4">
            <Package size={32} className="text-(--gray-color)" />
          </div>
          <p className="text-white text-lg mb-2">No Active Package</p>
          <p className="text-(--gray-color) text-sm mb-6">
            You haven't purchased any packages yet.
          </p>
          <button
            onClick={() => navigate("/packages")}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer"
          >
            Browse Packages
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    );
  }


  const activePackage = allItems[0];


  const packageName =
    activePackage.name ||
    activePackage.package_name ||
    activePackage.title ||
    "Package";
  const packageStatus =
    activePackage.status || activePackage.is_active || "Active";
  const expiryDate =
    activePackage.expiry_date ||
    activePackage.expiryDate ||
    activePackage.end_date;
  const sessionsRemaining =
    activePackage.sessions_remaining ||
    activePackage.sessionsRemaining ||
    activePackage.remaining_sessions ||
    0;
  const totalSessions =
    activePackage.total_sessions ||
    activePackage.totalSessions ||
    activePackage.sessions ||
    0;
  const packageIncludes =
    activePackage.includes ||
    activePackage.features ||
    activePackage.details ||
    [];

  return (
    <div className="flex flex-col gap-5 mx-4 sm:mx-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">My Packages</h2>

      <div className="border border-(--gray-color) rounded-2xl overflow-hidden">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-(--gray-color)">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Package size={20} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-white">
                  {packageName}
                </span>
                <span
                  className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${
                    packageStatus === "Active" || packageStatus === "confirmed"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-gray-500/15 text-gray-400"
                  }`}
                >
                  {packageStatus}
                </span>
              </div>
              <span className="text-md text-(--gray-color) mt-0.5 block">
                {expiryDate ? `Expires on ${expiryDate}` : "No expiration"}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/packages")}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer w-full sm:w-auto"
          >
            Upgrade Package
            <ArrowUpRight size={15} />
          </button>
        </div>

        
        <div className="p-6 border-b border-(--gray-color)">
          <ProgressBar current={sessionsRemaining} total={totalSessions} />
        </div>

        
        <div className="p-6">
          <span className="text-sm font-semibold text-(--gray-color) uppercase tracking-wider">
            Package Includes
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {packageIncludes.length > 0 ? (
              packageIncludes.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-md text-white"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-primary" />
                  </div>
                  {feature}
                </div>
              ))
            ) : (
              <>
                <div className="flex items-center gap-2.5 text-md text-white">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-primary" />
                  </div>
                  {totalSessions} Sessions
                </div>
                <div className="flex items-center gap-2.5 text-md text-white">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-primary" />
                  </div>
                  Personal Training
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      
      {allItems.length > 1 && (
        <div className="border border-(--gray-color) rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            All Bookings/Debug Info
          </h3>
          {allItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3 border-b border-(--gray-color) last:border-0"
            >
              <div>
                <span className="text-white">
                  {item.name || item.package_name || item.title || "Unknown"}
                </span>
                <span className="text-xs text-(--gray-color) ml-2">
                  (source: {item.source})
                </span>
              </div>
              <span
                className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${
                  item.status === "confirmed"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-gray-500/15 text-gray-400"
                }`}
              >
                {item.status || "Unknown"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
