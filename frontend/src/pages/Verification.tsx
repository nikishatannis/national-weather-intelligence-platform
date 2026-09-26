import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockReports } from "@/data/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X, Flag, AlertTriangle, ShieldCheck } from "lucide-react";

const Verification = () => {
  const pendingReports = mockReports.filter(r => r.status === "PENDING" || r.status === "FLAGGED").slice(0, 10);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Verification Center</h2>
          <p className="text-sm text-muted-foreground mt-1">Review and verify AI-flagged weather anomalies</p>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <Card className="bg-card border-border/50 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground">1</div>
              <span>Ingestion</span>
            </div>
            <div className="h-px bg-border/50 flex-1 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground">2</div>
              <span>Source Analysis</span>
            </div>
            <div className="h-px bg-border/50 flex-1 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground">3</div>
              <span>Deduplication</span>
            </div>
            <div className="h-px bg-border/50 flex-1 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shadow-glow border border-primary/30">4</div>
              <span className="text-primary">Human Verification</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border/50 shadow-sm overflow-hidden">
        <CardHeader className="bg-secondary/10 border-b border-border/50">
          <CardTitle className="text-lg flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Verification Queue
          </CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent bg-secondary/50">
                <TableHead className="font-semibold text-foreground">Event</TableHead>
                <TableHead className="font-semibold text-foreground">AI Confidence</TableHead>
                <TableHead className="font-semibold text-foreground">Source Reliability</TableHead>
                <TableHead className="font-semibold text-foreground">Dup. Prob.</TableHead>
                <TableHead className="font-semibold text-foreground">Recommendation</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingReports.map((report) => (
                <TableRow key={report.id} className="border-border/50 hover:bg-secondary/20">
                  <TableCell>
                    <div className="font-medium text-sm">{report.event}</div>
                    <div className="text-xs text-muted-foreground">{report.location}, {report.state}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${report.confidence > 80 ? 'text-success' : 'text-warning'}`}>
                        {report.confidence}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      report.reliability === "High" ? "border-success/50 text-success" : 
                      report.reliability === "Medium" ? "border-warning/50 text-warning" : 
                      "border-destructive/50 text-destructive"
                    }>
                      {report.reliability}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{report.duplicateProb}%</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      {report.confidence > 85 ? (
                         <span className="text-success flex items-center gap-1"><Check className="h-3 w-3"/> Verify</span>
                      ) : report.confidence > 60 ? (
                         <span className="text-warning flex items-center gap-1"><Flag className="h-3 w-3"/> Review</span>
                      ) : (
                         <span className="text-destructive flex items-center gap-1"><AlertTriangle className="h-3 w-3"/> Reject</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" className="h-8 bg-success text-success-foreground hover:bg-success/90">
                        Verify
                      </Button>
                      <Button size="sm" variant="destructive" className="h-8">
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Verification;