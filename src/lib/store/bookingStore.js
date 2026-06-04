import { create } from "zustand";


const generateBookingId = () => {
  return `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};


const BOOKINGS_KEY = "userBookings";

const useBookingStore = create((set, get) => ({

  bookings: [],


  addBooking: (booking) => {
    const newBooking = {
      ...booking,
      id: generateBookingId(),
      createdAt: new Date().toISOString(),
      status: booking.status || "confirmed",
      payment_status: booking.payment_status || "paid",
      is_purchased: true,
    };

    set((state) => ({
      bookings: [...state.bookings, newBooking],
    }));


    try {
      const stored = localStorage.getItem(BOOKINGS_KEY);
      const existingBookings = stored ? JSON.parse(stored) : [];
      localStorage.setItem(
        BOOKINGS_KEY,
        JSON.stringify([...existingBookings, newBooking]),
      );
    } catch (e) {
      console.error("Failed to save booking to localStorage:", e);
    }

    return newBooking;
  },


  removeBooking: (bookingId) => {
    set((state) => {
      const newBookings = state.bookings.filter((b) => b.id !== bookingId);

      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(newBookings));
      return { bookings: newBookings };
    });
  },


  clearBookings: () => {
    set({ bookings: [] });
    localStorage.removeItem(BOOKINGS_KEY);
  },


  initBookingsFromStorage: () => {
    try {
      const stored = localStorage.getItem(BOOKINGS_KEY);
      if (stored) {
        const parsedBookings = JSON.parse(stored);
        set({ bookings: parsedBookings });
  
      }
    } catch (e) {
      console.error("Failed to load bookings from localStorage:", e);
    }
  },


  initBookings: (bookings) => set({ bookings }),


  getActiveBooking: () => {
    const { bookings } = get();
    return (
      bookings.find(
        (b) =>
          b.status === "confirmed" ||
          b.payment_status === "paid" ||
          b.is_purchased === true,
      ) || bookings[0]
    );
  },


  getFormattedBookings: () => {
    const { bookings } = get();
    return bookings.map((b) => ({
      id: b.id,
      packageName: b.package?.name || b.package || b.package_name || "Package",
      packageDetails: b.package || {},
      trainerName: b.trainer?.name || b.trainer || b.trainer_name || "TBD",
      date: b.date || b.expiry_date || b.expiryDate,
      time: b.time || "TBD",
      status: b.status || "confirmed",
      bookedAt: b.bookedAt || b.createdAt,
      sessions: b.package?.sessions || b.sessions || 0,
      price: b.package?.price || b.price,
    }));
  },
}));

export default useBookingStore;
