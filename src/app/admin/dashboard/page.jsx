"use client";

import AdminLayout from "@/components/admin/layout/AdminLayout";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-neutral-500">
          Welcome to Air Care Admin Panel.
        </p>
      </div>
    </AdminLayout>
  );
}