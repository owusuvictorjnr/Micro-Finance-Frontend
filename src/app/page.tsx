import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { OverviewContent } from "@/features/overview/components";

export default function Home() {
  return (
    <QueryProvider>
      <AuthProvider>
        <DashboardLayout>
          <OverviewContent />
        </DashboardLayout>
      </AuthProvider>
    </QueryProvider>
  );
}
