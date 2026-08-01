"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileDrawer from "./MobileDrawer";

export default function AdminLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen bg-neutral-100 flex overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />

        <main className="flex min-h-0 flex-1 flex-col overflow-hidden p-4 md:p-6 lg:py-8 lg:pr-8 lg:pl-4">
          {children}
        </main>
      </div>
    </div>
  );
}