import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSources } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Database, RefreshCw, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataSources = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Data Sources</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage and monitor ingestion pipelines</p>
        </div>
        <Button variant="outline" className="bg-primary text-primary-foreground border-border/50 hover:bg-primary/90">
          🔄 Refresh Status
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSources.map((source, i) => (
          <Card key={i} className="bg-card border-border/50 shadow-sm hover:border-border transition-colors">
            <CardHeader className="pb-3 flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-base font-semibold">{source.name}</CardTitle>
                <div className="text-xs text-muted-foreground mt-1">{source.type}</div>
              </div>
              <div className="p-2 bg-secondary/50 rounded-md">
                <Database className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={
                    source.status === "ONLINE" ? "border-success/50 text-success bg-success/10" : 
                    source.status === "WARNING" ? "border-warning/50 text-warning bg-warning/10" : 
                    "border-destructive/50 text-destructive bg-destructive/10"
                  }>
                    {source.status === "ONLINE" && "✅ "}
                    {source.status === "WARNING" && "⚠️ "}
                    {source.status === "OFFLINE" && "❌ "}
                    {source.status}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Records Collected</span>
                  <span className="font-mono font-medium">{source.records}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Update</span>
                  <span>{source.lastUpdate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-secondary/20 border-border/50 border-dashed mt-8">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
           <Database className="h-8 w-8 mb-4 opacity-50" />
           <p className="text-sm font-medium">Add New Source</p>
           <p className="text-xs mt-1 max-w-sm">Connect new APIs, databases, or social media streams to the intelligence platform.</p>
           <Button variant="secondary" className="mt-4">Configure Connection</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSources;