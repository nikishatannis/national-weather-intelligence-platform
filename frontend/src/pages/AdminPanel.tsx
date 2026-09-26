import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AdminPanel = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">System Administration</h2>
          <p className="text-sm text-muted-foreground mt-1">Configure platform settings and parameters</p>
        </div>
        <Button>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">AI Verification Thresholds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Verify High Confidence</Label>
                  <p className="text-xs text-muted-foreground">Automatically verify reports with &gt;95% AI confidence</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Strict Duplicate Filtering</Label>
                  <p className="text-xs text-muted-foreground">Aggressively group similar reports within 5km</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Social Media NLP Analysis</Label>
                  <p className="text-xs text-muted-foreground">Process unstructured text from social feeds</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/50">
               <Label className="mb-2 block">Minimum Confidence for Analyst Review</Label>
               <div className="flex items-center gap-4">
                 <input type="range" className="flex-1" min="0" max="100" defaultValue="60" />
                 <span className="text-sm font-mono w-12 text-right">60%</span>
               </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Data Retention & Storage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Archive Unverified Reports</Label>
                  <p className="text-xs text-muted-foreground">Move to cold storage after 7 days</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Retain Media Attachments</Label>
                  <p className="text-xs text-muted-foreground">Keep high-res images/video for verified events</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/50 space-y-4">
               <div>
                 <Label className="mb-2 block">Hot Data Retention Period</Label>
                 <select className="w-full bg-secondary/50 border border-border/50 rounded-md p-2 text-sm">
                   <option>30 Days</option>
                   <option>90 Days</option>
                   <option>6 Months</option>
                   <option>1 Year</option>
                 </select>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;