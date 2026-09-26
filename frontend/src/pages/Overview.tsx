import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Clock, AlertTriangle, Activity } from "lucide-react";
import { mockStats, mockEvents } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const KPICard = ({ title, value, change, icon: Icon, colorClass }: any) => (
  <Card className="bg-card border-border/50 shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className={`p-2 rounded-md ${colorClass}`}>
        <Icon className="h-4 w-4" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-card-foreground">{value.toLocaleString()}</div>
      <p className="text-xs text-muted-foreground mt-1">{change}</p>
    </CardContent>
  </Card>
);

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">India — National Situation Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard 
          title="Total Reports" 
          value={mockStats.totalReports} 
          change={mockStats.totalReportsChange} 
          icon={FileText} 
          colorClass="bg-blue-500/10 text-blue-500" 
        />
        <KPICard 
          title="Verified Reports" 
          value={mockStats.verifiedReports} 
          change={`${mockStats.verifiedReportsPercent} verified`} 
          icon={CheckCircle} 
          colorClass="bg-success/10 text-success" 
        />
        <KPICard 
          title="Pending Verification" 
          value={mockStats.pendingVerification} 
          change={mockStats.pendingVerificationChange} 
          icon={Clock} 
          colorClass="bg-warning/10 text-warning" 
        />
        <KPICard 
          title="Active Weather Events" 
          value={mockStats.activeEvents} 
          change={mockStats.activeEventsChange} 
          icon={AlertTriangle} 
          colorClass="bg-destructive/10 text-destructive" 
        />
        <KPICard 
          title="Reports Processed Today" 
          value={mockStats.processedToday} 
          change={mockStats.processedTodayChange} 
          icon={Activity} 
          colorClass="bg-primary/10 text-primary" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 bg-card border-border/50 shadow-sm h-[500px] flex flex-col">
          <CardHeader>
            <CardTitle>Live Reports Stream</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-4">
              {mockEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-background/50">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-sm text-card-foreground">
                      {event.category} reported in {event.location}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{event.time}</span>
                      <span>•</span>
                      <span>{event.source}</span>
                    </div>
                  </div>
                  <Badge variant={
                    event.status === "VERIFIED" ? "default" : 
                    event.status === "PENDING" ? "secondary" : 
                    event.status === "FLAGGED" ? "destructive" : "outline"
                  } className={
                    event.status === "VERIFIED" ? "bg-success/20 text-success hover:bg-success/30 border-none" : 
                    event.status === "PENDING" ? "bg-warning/20 text-warning hover:bg-warning/30 border-none" : 
                    event.status === "FLAGGED" ? "bg-destructive/20 text-destructive hover:bg-destructive/30 border-none" : ""
                  }>
                    {event.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 bg-card border-border/50 shadow-sm h-[500px]">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Data Ingestion Rate</span>
                <span className="font-medium">420 events/sec</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[75%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">AI Processing Queue</span>
                <span className="font-medium text-warning">84 pending</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-warning w-[45%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Database Load</span>
                <span className="font-medium text-success">Normal (24%)</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-success w-[24%]"></div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/50">
              <h4 className="text-sm font-medium mb-3">Pipeline Status</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-success"></span>
                    Stream Processing
                  </span>
                  <span className="text-success">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-success"></span>
                    AI/ML Analysis
                  </span>
                  <span className="text-success">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-warning"></span>
                    Social Media API
                  </span>
                  <span className="text-warning">Degraded</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;