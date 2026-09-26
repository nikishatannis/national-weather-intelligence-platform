import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockData";
import { CloudRain, AlertTriangle, CloudLightning, Sun, CloudFog, Wind } from "lucide-react";

const getEventIcon = (category: string) => {
  switch (category) {
    case "Heavy Rainfall": return <CloudRain className="h-6 w-6" />;
    case "Flood": return <AlertTriangle className="h-6 w-6" />;
    case "Thunderstorm": return <CloudLightning className="h-6 w-6" />;
    case "Heatwave": return <Sun className="h-6 w-6" />;
    case "Dense Fog": return <CloudFog className="h-6 w-6" />;
    default: return <Wind className="h-6 w-6" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Severe": return "bg-destructive text-destructive-foreground";
    case "High": return "bg-warning text-warning-foreground";
    case "Moderate": return "bg-primary text-primary-foreground";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const WeatherEvents = () => {
  // Group events by category for summary cards
  const summary = mockEvents.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = { count: 0, severity: event.severity, locations: [] };
    }
    acc[event.category].count++;
    if (!acc[event.category].locations.includes(event.state)) {
       acc[event.category].locations.push(event.state);
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Active Weather Events</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(summary).map(([category, data]) => (
          <Card key={category} className="bg-card border-border/50 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between pb-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${getSeverityColor(data.severity)}`}>
                  {getEventIcon(category)}
                </div>
                <div>
                  <CardTitle className="text-lg">{category}</CardTitle>
                  <div className="text-sm text-muted-foreground mt-1">
                    {data.count} Active Event{data.count !== 1 && 's'}
                  </div>
                </div>
              </div>
              <Badge className={getSeverityColor(data.severity)}>{data.severity}</Badge>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Affected Regions</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.locations.map((loc: string) => (
                      <Badge key={loc} variant="secondary" className="bg-secondary/50 font-normal">
                        {loc}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Reports Received</span>
                     <span className="font-medium">{Math.floor(Math.random() * 5000) + 1000}</span>
                   </div>
                   <div className="flex justify-between text-sm mt-1">
                     <span className="text-muted-foreground">Verified</span>
                     <span className="font-medium text-success">{Math.floor(Math.random() * 80) + 10}%</span>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">Event Timeline (Last 24h)</h3>
      <Card className="bg-card border-border/50 shadow-sm p-6">
         <div className="relative border-l border-border/50 ml-3 space-y-8">
            <div className="relative pl-6">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-destructive ring-4 ring-background"></span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                <span className="text-sm font-semibold text-destructive">Severe Flood Warning Escalated</span>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full w-fit">14:15 IST</span>
              </div>
              <p className="text-sm text-muted-foreground">Multiple verified reports and sensor data confirm severe flooding in Mumbai.</p>
            </div>
            
            <div className="relative pl-6">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                <span className="text-sm font-semibold">Heavy Rainfall Detected</span>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full w-fit">13:32 IST</span>
              </div>
              <p className="text-sm text-muted-foreground">AI classified concentrated citizen reports in Chennai as Heavy Rainfall. Confidence: 94%.</p>
            </div>
            
             <div className="relative pl-6">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-warning ring-4 ring-background"></span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                <span className="text-sm font-semibold text-warning">Heatwave Alert Verified</span>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full w-fit">12:00 IST</span>
              </div>
              <p className="text-sm text-muted-foreground">IMD sensors confirm temperatures exceeding 45°C in Jaipur region.</p>
            </div>
         </div>
      </Card>
    </div>
  );
};

export default WeatherEvents;