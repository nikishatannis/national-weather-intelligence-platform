import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[hsl(var(--main-bg))] text-foreground font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
        <footer className="py-2 text-center text-xs text-muted-foreground border-t border-border/10">
          National Weather Intelligence Platform | Demo Prototype | Simulation Mode
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;