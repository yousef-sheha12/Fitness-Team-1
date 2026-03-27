import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Booking from "@/pages/booking/Booking";
import ContactUs from "@/pages/contact/ContactUs";
import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import TrainerProfile from "@/pages/trainerprofile/TrainerProfile";
import PackagePage from "@/pages/PackagePage";
import TrainingPage from "@/pages/TrainingPage/TrainingPage";
import StripeWrapper from "@/pages/booking/StripeWrapper";
import SignUp from "@/pages/auth/SignUp";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPass";
import Verify from "@/pages/auth/Verify";
import ResetPass from "@/pages/auth/ResetPass";
import Info from "@/pages/auth/Info";
import ProfileLayout from "@/components/layout/ProfileLayout/ProfileLayout";
import ProfileHeader from "@/pages/UserProfile/ProfileHeader";
import ProfileOverview from "@/pages/UserProfile/ProfileOverview";
import PersonalInfoForm from "@/pages/UserProfile/PersonalInfoForm";
import UpcomingSessions from "@/pages/UserProfile/UpcomingSessions";
import MyPackages from "@/pages/UserProfile/MyPackages";
import ProgressActivity from "@/pages/UserProfile/ProgressActivity";
import WorkoutHistory from "@/pages/UserProfile/WorkoutHistory";
import SecurityPassword from "@/pages/UserProfile/SecurityPassword";
import BillingHistory from "@/pages/UserProfile/BillingHistory";
import PaymentMethods from "@/pages/UserProfile/PaymentMethods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trainers",
        element: <TrainingPage />,
      },
      {
        path: "trainer/:id",
        element: <TrainerProfile />,
      },
      {
        path: "packages",
        element: <PackagePage />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "booking",
        children: [
          {
            path: "",
            element: (
              <StripeWrapper>
                <Booking />
              </StripeWrapper>
            ),
          },
        ],
      },
      {
        path: "profile",
<<<<<<< HEAD
        element: <PrivateRoute />,
        children: [{ path: "", element: <UserProfile /> }],
      },
      {
        path: "info",
        element: <PrivateRoute />,
        children: [{ path: "", element: <Info /> }],
=======
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Navigate to="ProfileOverview" replace /> },
          {
            path: "ProfileOverview",
            element: (
              <ProfileOverview
                aboutMe="Fitness enthusiast focused on strength training and overall wellness. Training consistently for 2 years. Looking to push my limits and achieve new personal records in deadlifts and squats while maintaining a balanced lifestyle."
                fitnessGoal="Build Muscle"
                preferredTraining="Both (Online & Gym)"
              />
            ),
          },
          {
            path: "ProfileHeader",
            element: (
              <ProfileHeader
                name="Mohamed Alaa"
                member={2022}
                sessionComplete={48}
                activePackage="Single Pack"
                nextSession="Today, 9:00 AM"
                onEditProfile={() => console.log("edit profile")}
              />
            ),
          },
          {
            path: "PersonalInfoForm",
            element: <PersonalInfoForm onSave={() => console.log("save")} />,
          },
          {
            path: "UpcomingSessions",
            element: (
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
            ),
          },
          {
            path: "MyPackages",
            element: (
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
            ),
          },

          {
            path: "ProgressActivity",
            element: (
              <ProgressActivity
                sessionComplete="12 Weeks"
                activePackage={48}
                nextSession={3.2}
              />
            ),
          },
          {
            path: "UpcomingSessions",
            element: <WorkoutHistory />,
          },
          {
            path: "PaymentMethods",
            element: <PaymentMethods />,
          },
          {
            path: "BillingHistory",
            element: <BillingHistory />,
          },
          {
            path: "SecurityPassword",
            element: <SecurityPassword />,
          },
        ],
>>>>>>> Profile_Sidebar
      },
    ],
  },

  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "verify", element: <Verify /> },
      { path: "reset-password", element: <ResetPass /> },
    ],
  },
]);
