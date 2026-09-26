import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockData";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { CloudRain, AlertTriangle, CloudLightning, Sun, CloudFog, Wind, Search, Layers, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";

// Fix leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const getEventIcon = (category: string) => {
  switch (category) {
    case "Heavy Rainfall": return <CloudRain className="h-4 w-4 text-primary" />;
    case "Flood": return <AlertTriangle className="h-4 w-4 text-destructive" />;
    case "Thunderstorm": return <CloudLightning className="h-4 w-4 text-warning" />;
    case "Heatwave": return <Sun className="h-4 w-4 text-destructive" />;
    case "Dense Fog": return <CloudFog className="h-4 w-4 text-muted-foreground" />;
    default: return <Wind className="h-4 w-4 text-primary" />;
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

const MapUpdater = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

const GisMap = () => {
  const [cartoApiKey, setCartoApiKey] = React.useState("cb1_3u1y_1_42802913c357ae35c8d78c7d");
  const defaultCenter: [number, number] = [20.5937, 78.9629]; // Center of India

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4">
      <Card className="flex-1 bg-card border-border/50 shadow-sm relative overflow-hidden flex flex-col">
        <div className="absolute top-4 left-4 z-[1000] flex gap-2">
          <Card className="bg-card/90 backdrop-blur shadow-md p-2 flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Search className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Layers className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Crosshair className="h-4 w-4" /></Button>
          </Card>
        </div>
        
        <div className="absolute bottom-6 left-4 z-[1000]">
          <Card className="bg-card/90 backdrop-blur shadow-md p-4 w-48">
            <h4 className="text-sm font-semibold mb-2">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span> Moderate</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-warning"></span> High</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-destructive"></span> Severe</div>
            </div>
          </Card>
        </div>

        <div className="flex-1 w-full h-full z-0">
          <MapContainer 
            center={defaultCenter} 
            zoom={5} 
            style={{ height: '100%', width: '100%', background: 'hsl(var(--main-bg))' }}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mockEvents.map((event) => (
              <Marker key={event.id} position={[event.lat, event.lng]}>
                <Popup className="custom-popup">
                  <div className="p-1 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                      {getEventIcon(event.category)}
                      {event.category}
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground mb-3">
                      <p><strong className="text-foreground">Location:</strong> {event.location}, {event.state}</p>
                      <p><strong className="text-foreground">Time:</strong> {event.time}</p>
                      <p><strong className="text-foreground">Source:</strong> {event.source}</p>
                      <p><strong className="text-foreground">Confidence:</strong> {event.confidence}%</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getSeverityColor(event.severity)}>{event.severity}</Badge>
                      <Badge variant="outline" className="border-success text-success">{event.status}</Badge>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>

      <Card className="w-80 bg-card border-border/50 shadow-sm flex flex-col hidden lg:flex">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-sm">Weather Layers</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4 flex-1 overflow-y-auto">
           {['Rainfall Intensity', 'Flood Reports', 'Temperature Anomalies', 'Thunderstorm Activity', 'Wind Activity', 'Fog Reports', 'Heatwave Zones'].map((layer) => (
            <div key={layer} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{layer}</span>
              <div className={`w-8 h-4 rounded-full ${layer === 'Flood Reports' || layer === 'Rainfall Intensity' ? 'bg-primary' : 'bg-secondary'} relative cursor-pointer`}>
                <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${layer === 'Flood Reports' || layer === 'Rainfall Intensity' ? 'left-4' : 'left-0.5'}`}></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default GisMap;