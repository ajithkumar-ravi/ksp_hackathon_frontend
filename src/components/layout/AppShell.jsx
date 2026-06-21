import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ title, breadcrumb, topbarRight, contentClassName = "p-6" }) {
  return (
    <div className="min-h-screen bg-paper">
      <Sidebar />
      <div className="pl-sidebar flex flex-col min-h-screen">
        <Topbar title={title} breadcrumb={breadcrumb} right={topbarRight} />
        <main className={`flex-1 ${contentClassName}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
