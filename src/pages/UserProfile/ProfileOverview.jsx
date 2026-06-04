import InfoTagCard from "../../components/common/UserProfile/InfoTagCard";
import { BowArrow, Dumbbell } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import ProfileHeader from "@/components/common/UserProfile/ProfileHeader";
import userAvatar from "@/assets/user2.jpg";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api/Auth/auth.api";
import {
  uploadProfileImage,
  getProfilePackages,
  getUserPurchases,
} from "@/lib/api/profile.api";
import { getBookings } from "@/lib/api/booking.api";
import { useAuth } from "@/hooks/useAuth";
import useBookingStore from "@/lib/store/bookingStore";

export default function ProfileOverview() {
  const uploadInp = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState();
  const { user: globalUser } = useAuth();


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

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { data: packages } = useQuery({
    queryKey: ["profilePackages"],
    queryFn: getProfilePackages,
  });

  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  const { data: userPurchases } = useQuery({
    queryKey: ["userPurchases"],
    queryFn: getUserPurchases,
  });


  const localStorageBookings = React.useMemo(() => {
    try {
      const stored = localStorage.getItem("userBookings");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }, []);


  const allBookings =
    storeBookings?.length > 0 ? storeBookings : localStorageBookings;

  const userData = profile?.user || globalUser;

  const name = userData?.name || "User";
  const memberSince = userData?.member_since || new Date().getFullYear();
  const sessionsCompleted = userData?.sessions_completed || 0;
  const aboutMe = userData?.about_me || "No bio added yet.";
  const fitnessGoal = userData?.fitness_goal || "Not set";
  const preferredTraining = userData?.preferred_training || "Not specified";


  let activePackage = "No Active Package";
  let nextSession = "No upcoming session";


  if (packages && Array.isArray(packages) && packages.length > 0) {
    activePackage = packages[0].name || packages[0].package_name || "Package";
    nextSession =
      packages[0].next_session ||
      packages[0].session_date ||
      "No upcoming session";
  } else if (bookings && Array.isArray(bookings) && bookings.length > 0) {
    const activeBooking =
      bookings.find(
        (b) =>
          b.status === "confirmed" ||
          b.payment_status === "paid" ||
          b.is_purchased === true,
      ) || bookings[0];
    activePackage =
      activeBooking?.package_name || activeBooking?.name || "Package";
    nextSession =
      activeBooking?.next_session ||
      activeBooking?.session_date ||
      "No upcoming session";
  } else if (
    userPurchases &&
    Array.isArray(userPurchases) &&
    userPurchases.length > 0
  ) {
    const purchase = userPurchases[0];
    activePackage = purchase?.name || purchase?.package_name || "Package";
    nextSession = purchase?.next_session || "No upcoming session";
  } else if (allBookings && allBookings.length > 0) {
    const storedBooking = allBookings[0];

    const packageValue = storedBooking?.package;
    activePackage =
      typeof packageValue === "object"
        ? packageValue?.name || packageValue?.package_name || "Package"
        : packageValue || storedBooking?.package_name || "Package";
    nextSession =
      storedBooking?.date || storedBooking?.time || "No upcoming session";
  }

  const changePhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const tempUrl = URL.createObjectURL(file);
    setAvatarUrl(tempUrl);

    try {
      const formData = new FormData();
      formData.append("image", file);
      await uploadProfileImage(formData);
    } catch (err) {
      console.error("Failed to upload image", err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Profile Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your personal information and preferences
        </p>
      </div>

      <ProfileHeader
        name={name}
        member={memberSince}
        sessionComplete={sessionsCompleted}
        activePackage={activePackage}
        nextSession={nextSession}
        avatarUrl={avatarUrl || userData?.profile_image || userAvatar}
        onAvatarClick={() => uploadInp.current?.click()}
        onEditProfile={() => {}}
      />

      
      <input
        type="file"
        accept="image/jpeg,image/gif,image/png"
        hidden
        ref={uploadInp}
        onChange={changePhoto}
      />

      
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground mb-3">
          About Me
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {aboutMe}
        </p>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4">
        <InfoTagCard
          icon={<BowArrow size={18} />}
          label="Fitness Goal"
          value={fitnessGoal}
        />

        <InfoTagCard
          icon={<Dumbbell size={18} />}
          label="Preferred Training"
          value={preferredTraining}
        />
      </div>
    </div>
  );
}
