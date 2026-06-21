import {
  LayoutGrid,
  Bot,
  BarChart3,
  Share2,
  Map,
  FolderLock,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutGrid },
  { label: "AI Agent", path: "/ai-agent", icon: Bot },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Visualization", path: "/visualization", icon: Share2 },
  { label: "GIS Map", path: "/gis-map", icon: Map },
  { label: "Case Files", path: "/case-files", icon: FolderLock },
];

export const TOP_NAV_ITEMS = [
  { label: "Case Files", path: "/case-files" },
  { label: "Evidence", path: "/evidence" },
  { label: "Intel Reports", path: "/intel-reports" },
];
