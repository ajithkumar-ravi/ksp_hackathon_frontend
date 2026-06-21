import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegistrationPage from "@/features/registration/pages/RegistrationPage";
import AppShell from "@/components/layout/AppShell";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import AIAgentPage from "@/features/ai-agent/pages/AIAgentPage";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";
import VisualizationPage from "@/features/visualization/pages/VisualizationPage";
import GISMapPage from "@/features/gis-map/pages/GISMapPage";
import CaseFilesPage from "@/features/case-files/pages/CaseFilesPage";
import NotFoundPage from "@/components/shared/NotFoundPage";

const PAGE_META = {
  "/dashboard": { title: "Dashboard", breadcrumb: "Home / Dashboard" },
  "/ai-agent": { title: "AI Agent", breadcrumb: "Home / AI Agent" },
  "/analytics": { title: "Analytics", breadcrumb: "Home / Analytics" },
  "/visualization": { title: "Visualization", breadcrumb: "Home / Visualization" },
  "/gis-map": { title: "GIS Map", breadcrumb: "Home / GIS Map" },
  "/case-files": { title: "Case Files", breadcrumb: "Home / Case Files" },
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route element={<AppShellRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/ai-agent" element={<AIAgentPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
          <Route path="/gis-map" element={<GISMapPage />} />
          <Route path="/case-files" element={<CaseFilesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppShellRoute() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? { title: "KSP Intel" };
  return <AppShell title={meta.title} breadcrumb={meta.breadcrumb} />;
}
