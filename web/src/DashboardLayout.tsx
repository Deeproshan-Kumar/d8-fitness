import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Sidebar, Main } from "./components/dashboard/layout";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
