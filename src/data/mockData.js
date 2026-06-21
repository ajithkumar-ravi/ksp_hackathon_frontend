export const dashboardStats = [
  { label: "Total Cases", value: "12,846", delta: "+4.2%", deltaTone: "confirmed" },
  { label: "Open Cases", value: "5,278", delta: "-1.8%", deltaTone: "alert" },
  { label: "Solved Cases", value: "6,994", delta: "+12.5%", deltaTone: "confirmed" },
  { label: "Critical Cases", value: "574", delta: "+3 today", deltaTone: "alert" },
];

export const caseClassification = [
  { label: "Cyber Crime", pct: 35, tone: "command" },
  { label: "Robbery", pct: 20, tone: "signal" },
  { label: "Fraud", pct: 20, tone: "signalLight" },
  { label: "Violence", pct: 15, tone: "caution" },
  { label: "Others", pct: 10, tone: "neutral" },
];

export const recentActivity = [
  {
    id: 1,
    title: "Case #10482 assigned to Intelligence Unit 4",
    meta: "2 minutes ago · South Zone Precinct",
    urgent: true,
  },
  {
    id: 2,
    title: "Facial recognition match confirmed for Suspect #01",
    meta: "15 minutes ago · Visualization Server #4",
    urgent: false,
  },
  {
    id: 3,
    title: "Archival report #229-B synchronized with headquarters",
    meta: "1 hour ago · Records Division",
    urgent: false,
  },
];

export const relatedIntel = [
  { id: 1, title: "CCTV Footage: MG Road", meta: "2 hours ago · 450MB", type: "video" },
  { id: 2, title: "Forensic Report #99", meta: "Yesterday · Pending match", type: "forensic" },
  { id: 3, title: "Suspect Dossier: A. Kumar", meta: "Criminal record found", type: "dossier" },
];

export const crimeTrendMonths = [
  { month: "Jan", actual: 42, forecast: 58 },
  { month: "Feb", actual: 64, forecast: 70 },
  { month: "Mar", actual: 38, forecast: 66 },
  { month: "Apr", actual: 86, forecast: 92 },
  { month: "May", actual: 48, forecast: 66 },
  { month: "Jun", actual: 56, forecast: 88 },
];

export const analyticsStats = [
  { label: "Total Reported Cases", value: "10,520", delta: "+12.4% vs prev. period", deltaTone: "confirmed" },
  { label: "Case Resolution Rate", value: "78.5%", delta: "+2.1% efficiency gain", deltaTone: "confirmed" },
  { label: "Avg. Response Time", value: "14.2m", delta: "-0.8m delay increase", deltaTone: "alert" },
];

export const gisHotspots = [
  { id: 1, x: 28, y: 18, level: "alert" },
  { id: 2, x: 50, y: 16, level: "caution" },
  { id: 3, x: 42, y: 32, level: "caution" },
  { id: 4, x: 55, y: 42, level: "neutral" },
  { id: 5, x: 38, y: 56, level: "alert", primary: true },
  { id: 6, x: 47, y: 48, level: "signal" },
];

export const liveActivityFeed = [
  {
    id: 1,
    title: "Burglary reported",
    meta: "HSR Layout, Sector 4 · CCTV ID: 8821",
    time: "2m ago",
    tags: ["Ticket #82", "Dispatched"],
    tone: "alert",
  },
  {
    id: 2,
    title: "Suspicious unit detected",
    meta: "JP Nagar, Phase 2 · AI visual match high",
    time: "15m ago",
    tags: ["Monitoring"],
    tone: "signal",
  },
];

export const aiQuickActions = [
  { id: 1, label: "Analyze FIR", desc: "Summary and extraction", icon: "FileText" },
  { id: 2, label: "Suspect Patterns", desc: "Cross-reference records", icon: "Users" },
  { id: 3, label: "Crime Hotspot", desc: "Spatial intelligence", icon: "MapPin" },
];

export const evidenceFiles = [
  {
    id: 1,
    name: "Incident_Report_04.pdf",
    type: "Witness Statement",
    size: "4.2MB",
    tags: ["OCR Verified", "High Priority"],
  },
];

export const confidenceMetrics = [
  { label: "Evidence Consistency", value: 22, tone: "alert", display: "Low (22%)" },
  { label: "Motive Linkage", value: 65, tone: "caution", display: "Medium (65%)" },
  { label: "Forensic Match", value: 91, tone: "confirmed", display: "High (91%)" },
];
