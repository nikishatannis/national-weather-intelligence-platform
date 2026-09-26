export const mockStats = {
  totalReports: 24682,
  totalReportsChange: "+12.4%",
  verifiedReports: 18931,
  verifiedReportsPercent: "76.7%",
  pendingVerification: 3421,
  pendingVerificationChange: "-5.2%",
  activeEvents: 87,
  activeEventsChange: "+8 active",
  processedToday: 6842,
  processedTodayChange: "+18.3%",
};

export const mockEvents = [
  { id: "EVT-1042", category: "Heavy Rainfall", location: "Chennai", state: "Tamil Nadu", time: "13:32 IST", source: "Citizen Report", confidence: 94, status: "VERIFIED", severity: "High", lat: 13.0827, lng: 80.2707 },
  { id: "EVT-1043", category: "Flood", location: "Mumbai", state: "Maharashtra", time: "14:15 IST", source: "IMD Sensor", confidence: 98, status: "VERIFIED", severity: "Severe", lat: 19.0760, lng: 72.8777 },
  { id: "EVT-1044", category: "Thunderstorm", location: "Bengaluru", state: "Karnataka", time: "14:50 IST", source: "Social Media", confidence: 72, status: "PENDING", severity: "Moderate", lat: 12.9716, lng: 77.5946 },
  { id: "EVT-1045", category: "Heatwave", location: "Jaipur", state: "Rajasthan", time: "12:00 IST", source: "IMD Data", confidence: 99, status: "VERIFIED", severity: "Severe", lat: 26.9124, lng: 75.7873 },
  { id: "EVT-1046", category: "Dense Fog", location: "Delhi", state: "Delhi", time: "06:30 IST", source: "Weather API", confidence: 88, status: "VERIFIED", severity: "Moderate", lat: 28.7041, lng: 77.1025 },
  { id: "EVT-1047", category: "Dust Storm", location: "Ahmedabad", state: "Gujarat", time: "15:20 IST", source: "Citizen Report", confidence: 65, status: "FLAGGED", severity: "Low", lat: 23.0225, lng: 72.5714 },
  { id: "EVT-1048", category: "Strong Wind", location: "Kochi", state: "Kerala", time: "11:45 IST", source: "Social Media", confidence: 81, status: "PENDING", severity: "Moderate", lat: 9.9312, lng: 76.2673 },
];

export const mockReports = Array.from({ length: 50 }).map((_, i) => ({
  id: `REP-${8000 + i}`,
  date: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
  location: ["Chennai", "Mumbai", "Delhi", "Bengaluru", "Kolkata", "Hyderabad", "Jaipur", "Lucknow"][Math.floor(Math.random() * 8)],
  state: ["Tamil Nadu", "Maharashtra", "Delhi", "Karnataka", "West Bengal", "Telangana", "Rajasthan", "Uttar Pradesh"][Math.floor(Math.random() * 8)],
  event: ["Heavy Rainfall", "Flood", "Thunderstorm", "Heatwave", "Dense Fog"][Math.floor(Math.random() * 5)],
  source: ["Citizen Report", "Social Media", "IMD Sensor", "Weather API"][Math.floor(Math.random() * 4)],
  confidence: Math.floor(Math.random() * 40) + 60,
  status: ["VERIFIED", "PENDING", "FLAGGED", "REJECTED"][Math.floor(Math.random() * 4)],
  duplicateProb: Math.floor(Math.random() * 15),
  reliability: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
}));

export const mockSources = [
  { name: "IMD Weather API", type: "Official Dataset", status: "ONLINE", records: "1.2M", lastUpdate: "2 mins ago" },
  { name: "Citizen Reporting Portal", type: "Crowdsourced", status: "ONLINE", records: "45K", lastUpdate: "Just now" },
  { name: "Social Media Feed X", type: "Social Media", status: "WARNING", records: "2.3M", lastUpdate: "15 mins ago" },
  { name: "Open Weather Dataset", type: "Public API", status: "ONLINE", records: "890K", lastUpdate: "5 mins ago" },
  { name: "State Govt Sensors", type: "Official Sensor", status: "OFFLINE", records: "340K", lastUpdate: "2 hours ago" },
];