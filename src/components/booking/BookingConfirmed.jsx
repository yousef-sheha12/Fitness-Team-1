import { Check } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useRef } from "react";
import useBookingStore from "@/lib/store/bookingStore";

export const BookingConfirmed = ({ bookingData, onBackToHome }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const addBooking = useBookingStore((state) => state.addBooking);
  const [searchParams] = useSearchParams();
  const isSavedRef = useRef(false);


  useEffect(() => {

    const trainerId = searchParams.get("trainerId");
    const packageNameFromUrl = searchParams.get("packageName");
    const trainerNameFromUrl = searchParams.get("trainerName");
    const dateFromUrl = searchParams.get("date");
    const timeFromUrl = searchParams.get("time");


    const packageData =
      bookingData?.package ||
      bookingData?.trainer_package ||
      bookingData?.package_name ||
      packageNameFromUrl ||
      "Training Package";
    const trainerData =
      bookingData?.trainer?.name ||
      bookingData?.trainer ||
      bookingData?.trainer_name ||
      trainerNameFromUrl ||
      "Trainer";
    const dateData =
      bookingData?.date ||
      bookingData?.session_date ||
      bookingData?.sessions?.[0] ||
      dateFromUrl ||
      new Date().toLocaleDateString();
    const timeData =
      bookingData?.time ||
      bookingData?.session_time ||
      timeFromUrl ||
      "10:00 AM";


    if (!isSavedRef.current) {
      isSavedRef.current = true;

      const newBooking = {
        package:
          typeof packageData === "object" ? packageData : { name: packageData },
        trainer:
          typeof trainerData === "object" ? trainerData : { name: trainerData },
        date: dateData,
        time: timeData,
        status: "confirmed",
        price: bookingData?.price || bookingData?.total_amount,
        bookId: bookingData?.id || bookingData?.booking_id || trainerId,
        session_type: bookingData?.session_type,
        duration: bookingData?.duration,
        savedFrom: "bookingConfirmed",
        savedAt: new Date().toISOString(),
      };


      addBooking(newBooking);
    }
  }, [bookingData, addBooking, searchParams]);


  const handleGoToMyPackages = () => {
    if (onBackToHome) {
      onBackToHome();
    }
    navigate("/profile/packages");
  };


  const userName =
    user?.name || bookingData?.user?.name || bookingData?.userName || "User";
  const userEmail =
    user?.email || bookingData?.user?.email || bookingData?.email || "";


  const summaryDetails = [
    {
      label: "Trainer",
      value: bookingData?.trainer?.name || bookingData?.trainer || "N/A",
    },
    {
      label: "Package",
      value: bookingData?.package?.name || bookingData?.package || "N/A",
    },
    { label: "Date", value: bookingData?.date || "N/A" },
    { label: "Time", value: bookingData?.time || "N/A", bold: true },
  ];

  return (
    <div className="flex flex-col items-center w-full animate-fadeIn">
      
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(34,197,94,0.4)]">
        <Check size={32} strokeWidth={3} className="text-white" />
      </div>

      
      <h2 className="text-white font-bold text-xl mb-2">Booking Confirmed</h2>

      
      <p className="text-gray-400 text-sm text-center leading-relaxed mb-6 max-w-xs">
        You're All Set, {userName}. Check Your Email (
        <span className="text-gray-300">{userEmail}</span>) For Confirmation
        Details And Preparation Instructions.
      </p>

      
      <div className="w-full border border-[#2e2e2e] rounded-xl overflow-hidden mb-6">
        <div className="text-center py-2 bg-[#1e1e1e] border-b border-[#2e2e2e]">
          <span className="text-sm font-semibold text-white">
            Booking Summary
          </span>
        </div>
        {summaryDetails.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center px-4 py-3 border-b border-[#2a2a2a] last:border-b-0 bg-[#181818]"
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span
              className={`text-sm ${row.bold ? "font-bold text-white" : "text-gray-200"}`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      
      <button
        onClick={onBackToHome || (() => navigate("/"))}
        className="w-full py-3 rounded-xl cursor-pointer bg-cta-primary hover:bg-red-600 active:scale-[0.98] transition-all text-white font-semibold text-sm"
      >
        Back To Home
      </button>

      
      <button
        onClick={handleGoToMyPackages}
        className="w-full mt-3 py-3 rounded-xl cursor-pointer bg-primary/10 hover:bg-primary/20 border border-primary/30 active:scale-[0.98] transition-all text-primary font-semibold text-sm"
      >
        View My Packages
      </button>
    </div>
  );
};
