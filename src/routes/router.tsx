// router.tsx
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Trainers from "@/pages/trainers/Trainers";
import Packages from "@/pages/packages/Packages";
import PrivateRoute from "./PrivateRoute";
import Booking from "@/pages/booking/Booking";
import ContactUs from "@/pages/contact/ContactUs";
import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import SignUp from "@/pages/Auth/SignUp";
import Login from "@/pages/Auth/Login";
import ForgotPassword from "@/pages/Auth/ForgotPass";
import Verify from "@/pages/Auth/Verify";
import ResetPass from "@/pages/Auth/ResetPass";
import Info from "@/pages/Auth/Info";

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
        element: <Trainers />,
      },
      {
        path: "trainer/:id",
        // element: <TrainerProfile />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
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
      { path: "info", element: <Info /> },
    ],
  },
  {
    path: "/booking",
    element: <PrivateRoute />, // هنا في المستقبل تحمي الصفحة
    children: [{ path: "", element: <Booking /> }],
  },
]);
