import ProfileOverview from "@/components/UserProfile/ProfileOverview";
import ProfileHeader from "../../components/UserProfile/ProfileHeader";
import PersonalInfoForm from "@/components/UserProfile/PersonalInfoForm";
import UpcomingSessions from "@/components/UserProfile/UpcomingSessions";
import MyPackages from "@/components/UserProfile/MyPackages";
import ProgressActivity from "@/components/UserProfile/ProgressActivity";
import WorkoutHistory from "@/components/UserProfile/WorkoutHistory";
import PaymentMethods from "@/components/UserProfile/PaymentMethods";
import BillingHistory from "@/components/UserProfile/BillingHistory";
import SecurityPassword from "@/components/UserProfile/SecurityPassword";

export default function UserProfile() {
  return (
    <div
      className="min-h-screen px-12 py-12 mx-auto flex flex-col gap-10"
      style={{
        background:
          "linear-gradient(to bottom, #2a0000 0%, #121212 8%, #121212 100%)",
      }}>
      <ProfileHeader
        name="Mohamed Alaa"
        member={2022}
        sessionComplete={48}
        activePackage="Single Pack"
        nextSession="Today, 9:00 AM"
        onEditProfile={() => console.log("edit profile")}
      />
      <ProfileOverview
        aboutMe="Fitness enthusiast focused on strength training and overall wellness. Training consistently for 2 years. Looking to push my limits and achieve new personal records in deadlifts and squats while maintaining a balanced lifestyle."
        fitnessGoal="Build Muscle"
        preferredTraining="Both (Online & Gym)"
      />
      <PersonalInfoForm onSave={() => console.log("save")} />
      <UpcomingSessions
        sessions={[
          {
            id: "1",
            sessionName: "Strength Training",
            trainerName: "Sarah Jenkins",
            date: "Tomorrow",
            time: "9:00 AM - 10:00 AM",
            location: "Downtown Gym",
          },
        ]}
      />

      <MyPackages
        pack={{
          name: "Single Pack",
          status: "Active",
          expiryDate: "May 31, 2026",
          sessionsRemaining: 12,
          totalSessions: 20,
          includes: [
            "1-on-1 Personal Training",
            "Weekly Check-ins",
            "Customized Nutrition Plan",
            "Access to Pro App Features",
          ],
        }}
        onUpgrade={() => console.log("upgrade")}
      />

      <ProgressActivity
        sessionComplete="12 Weeks"
        activePackage={48}
        nextSession={3.2}
      />
      <WorkoutHistory />
      <PaymentMethods />
      <BillingHistory />
      <SecurityPassword />
    </div>
  );
}
