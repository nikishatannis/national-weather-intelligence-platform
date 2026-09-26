import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Activity, 
  FileText, 
  CloudLightning, 
  BarChart2, 
  Map as MapIcon, 
  CheckCircle, 
  Database, 
  Settings,
  ShieldAlert,
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Live Weather", path: "/live", icon: Activity },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Weather Events", path: "/events", icon: CloudLightning },
  { name: "Analytics", path: "/analytics", icon: BarChart2 },
  { name: "Map", path: "/map", icon: MapIcon },
  { name: "Verification", path: "/verification", icon: CheckCircle },
  { name: "Data Sources", path: "/sources", icon: Database },
  { name: "Admin Panel", path: "/admin", icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))] flex flex-col border-r border-border/10 flex-shrink-0">
      <div className="p-6 flex items-center space-x-3 border-b border-border/10">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-glow">
          IMD
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm tracking-wide">National Weather</span>
          <span className="text-xs text-muted-foreground">Intelligence Platform</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <item.icon className={cn("mr-3 h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/10 space-y-4">
        <div className="flex items-center space-x-2 text-xs">
          <Server className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">System Status</span>
          <div className="ml-auto flex items-center">
            <span className="h-2 w-2 rounded-full bg-success mr-1.5 animate-pulse"></span>
            <span className="text-success font-medium">Operational</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 pt-2">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">Admin Profile</span>
            <span className="text-[10px] text-muted-foreground">Level 4 Clearance</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;