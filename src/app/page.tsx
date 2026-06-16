import React from "react";
import { AuthProvider } from "@/providers/auth-provider";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import DashboardContent from "@/features/dashboard/components/dashboard-content";

export default function Home() {
  return (
    <AuthProvider>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </AuthProvider>
  );
}
