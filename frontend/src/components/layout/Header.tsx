import React from "react";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <header className="h-16 bg-[hsl(var(--sidebar))] border-b border-border/10 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-foreground tracking-tight">National Weather Intelligence Platform</h1>
        <div className="text-xs text-muted-foreground flex items-center">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span className="font-mono">{formattedTime} IST</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5"></span>
            <span className="text-success">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search location, event, ID..." 
            className="w-full bg-secondary/30 border-border/20 pl-9 text-sm focus-visible:ring-primary h-9"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive"></span>
        </Button>
        
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;