import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockReports } from "@/data/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Eye, Check, X, Flag } from "lucide-react";

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Weather Reports</h2>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search reports..." 
              className="w-full bg-card border-border/50 pl-9 text-sm focus-visible:ring-primary h-9"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 border-border/50 bg-card">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Card className="bg-card border-border/50 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-secondary/20">
              <TableRow className="border-border/50 hover:bg-transparent bg-secondary/50">
                <TableHead className="font-semibold text-foreground">Report ID</TableHead>
                <TableHead className="font-semibold text-foreground">Date & Time</TableHead>
                <TableHead className="font-semibold text-foreground">Location</TableHead>
                <TableHead className="font-semibold text-foreground">Event</TableHead>
                <TableHead className="font-semibold text-foreground">Source</TableHead>
                <TableHead className="font-semibold text-foreground">Confidence</TableHead>
                <TableHead className="font-semibold text-foreground">Status</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReports.slice(0, 15).map((report) => (
                <TableRow key={report.id} className="border-border/50 hover:bg-secondary/20">
                  <TableCell className="font-mono text-xs font-medium text-muted-foreground">{report.id}</TableCell>
                  <TableCell className="text-sm">{new Date(report.date).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}</TableCell>
                  <TableCell className="text-sm">
                    {report.location}
                    <span className="text-xs text-muted-foreground block">{report.state}</span>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{report.event}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{report.source}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[60px] h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${report.confidence > 80 ? 'bg-success' : report.confidence > 60 ? 'bg-warning' : 'bg-destructive'}`} 
                          style={{ width: `${report.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">{report.confidence}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      report.status === "VERIFIED" ? "border-success/50 text-success bg-success/10" : 
                      report.status === "PENDING" ? "border-warning/50 text-warning bg-warning/10" : 
                      report.status === "FLAGGED" ? "border-destructive/50 text-destructive bg-destructive/10" : 
                      "border-muted text-muted-foreground"
                    }>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-success hover:text-success hover:bg-success/10" title="Verify">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-warning hover:text-warning hover:bg-warning/10" title="Flag">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 15 of {mockReports.length} reports</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Reports;