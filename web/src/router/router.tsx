import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout";
import NotFound from "../NotFound";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  MembershipPage,
  TrainersPage,
  ContactPage,
} from "../pages/main";

// Dashboard
import DashboardLayout from "../DashboardLayout";
import { AttendancePage, AuthPage, ClassesPage, HomePage as Home, MembershipsPage, TrainersPage as Trainers, MembersPage, SettingsPage } from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/membership",
        element: <MembershipPage />,
      },
      {
        path: "/trainers",
        element: <TrainersPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  // Dashboard
  {
    path: "/login",
    element: <AuthPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "members",
        element: <MembersPage />,
      },
      {
        path: "trainers",
        element: <Trainers />,
      },
      {
        path: "memberships",
        element: <MembershipsPage />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
