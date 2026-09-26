import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Overview from "./pages/Overview";
import LiveWeather from "./pages/LiveWeather";
import Reports from "./pages/Reports";
import WeatherEvents from "./pages/WeatherEvents";
import Analytics from "./pages/Analytics";
import GisMap from "./pages/GisMap";
import Verification from "./pages/Verification";
import DataSources from "./pages/DataSources";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
export { API_URL } from "./config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Overview />} />
            <Route path="live" element={<LiveWeather />} />
            <Route path="reports" element={<Reports />} />
            <Route path="events" element={<WeatherEvents />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="map" element={<GisMap />} />
            <Route path="verification" element={<Verification />} />
            <Route path="sources" element={<DataSources />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;