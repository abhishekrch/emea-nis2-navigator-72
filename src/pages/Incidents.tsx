import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle, 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Calendar,
  Search,
  Filter
} from "lucide-react";

const incidents = [
  {
    id: "INC-001",
    title: "Ransomware Attack on Critical Infrastructure",
    country: "Germany",
    severity: "High",
    status: "Resolved",
    reportedDate: "2024-01-14",
    resolvedDate: "2024-01-16",
    reportedBy: "David Kumar",
    description: "Attempted ransomware attack on energy sector infrastructure detected and contained.",
    timeline: [
      { time: "Initial Detection", date: "2024-01-14 09:30", completed: true },
      { time: "24h Report Submitted", date: "2024-01-15 09:30", completed: true },
      { time: "72h Update Submitted", date: "2024-01-17 09:30", completed: true },
      { time: "Final Report Due", date: "2024-02-14", completed: true }
    ]
  },
  {
    id: "INC-002", 
    title: "DDoS Attack on Banking Services",
    country: "France",
    severity: "Medium",
    status: "In Progress",
    reportedDate: "2024-01-13",
    resolvedDate: null,
    reportedBy: "Emma Rodriguez",
    description: "Distributed denial of service attack targeting online banking platform.",
    timeline: [
      { time: "Initial Detection", date: "2024-01-13 14:15", completed: true },
      { time: "24h Report Submitted", date: "2024-01-14 14:15", completed: true },
      { time: "72h Update Submitted", date: "2024-01-16 14:15", completed: true },
      { time: "Final Report Due", date: "2024-02-13", completed: false }
    ]
  },
  {
    id: "INC-003",
    title: "Data Breach in Healthcare System",
    country: "Netherlands", 
    severity: "High",
    status: "Resolved",
    reportedDate: "2024-01-12",
    resolvedDate: "2024-01-15",
    reportedBy: "Sarah Johnson",
    description: "Unauthorized access to patient data in hospital management system.",
    timeline: [
      { time: "Initial Detection", date: "2024-01-12 11:20", completed: true },
      { time: "24h Report Submitted", date: "2024-01-13 11:20", completed: true },
      { time: "72h Update Submitted", date: "2024-01-15 11:20", completed: true },
      { time: "Final Report Due", date: "2024-02-12", completed: true }
    ]
  },
  {
    id: "INC-004",
    title: "Supply Chain Cyber Attack",
    country: "Spain",
    severity: "Medium",
    status: "Under Investigation",
    reportedDate: "2024-01-11",
    resolvedDate: null,
    reportedBy: "Michael Chen",
    description: "Suspected compromise of supply chain management system.",
    timeline: [
      { time: "Initial Detection", date: "2024-01-11 16:45", completed: true },
      { time: "24h Report Submitted", date: "2024-01-12 16:45", completed: true },
      { time: "72h Update Submitted", date: "2024-01-14 16:45", completed: false },
      { time: "Final Report Due", date: "2024-02-11", completed: false }
    ]
  }
];

export default function Incidents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);
  const [isNewIncidentDialogOpen, setIsNewIncidentDialogOpen] = useState(false);

  const filteredIncidents = incidents.filter(incident =>
    incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-info text-info-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved": return "bg-success text-success-foreground";
      case "In Progress": return "bg-warning text-warning-foreground";
      case "Under Investigation": return "bg-info text-info-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved": return CheckCircle;
      case "In Progress": return Clock;
      case "Under Investigation": return AlertCircle;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Incident Management</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage NIS2 security incidents across EMEA region
          </p>
        </div>
        <Dialog open={isNewIncidentDialogOpen} onOpenChange={setIsNewIncidentDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Report Incident
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Report New Incident</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="incident-title">Incident Title</Label>
                  <Input id="incident-title" placeholder="Brief description of the incident" />
                </div>
                <div>
                  <Label htmlFor="incident-country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="nl">Netherlands</SelectItem>
                      <SelectItem value="it">Italy</SelectItem>
                      <SelectItem value="es">Spain</SelectItem>
                      <SelectItem value="pl">Poland</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="incident-severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="incident-type">Incident Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ransomware">Ransomware</SelectItem>
                      <SelectItem value="ddos">DDoS Attack</SelectItem>
                      <SelectItem value="breach">Data Breach</SelectItem>
                      <SelectItem value="malware">Malware</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="incident-description">Description</Label>
                <Textarea 
                  id="incident-description" 
                  placeholder="Detailed description of the incident"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsNewIncidentDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsNewIncidentDialogOpen(false)}>
                  Submit Report
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Incident List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search incidents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredIncidents.map((incident) => {
                  const StatusIcon = getStatusIcon(incident.status);
                  return (
                    <div
                      key={incident.id}
                      onClick={() => setSelectedIncident(incident)}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedIncident.id === incident.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{incident.id}</span>
                        <div className="flex items-center gap-1">
                          <StatusIcon className="h-3 w-3" />
                          <Badge className={getStatusColor(incident.status)} variant="secondary">
                            {incident.status}
                          </Badge>
                        </div>
                      </div>
                      <h3 className="font-medium text-sm mb-1">{incident.title}</h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{incident.country}</span>
                        <Badge className={getSeverityColor(incident.severity)} variant="secondary">
                          {incident.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Reported: {incident.reportedDate}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Incident Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {selectedIncident.id}
                    <Badge className={getStatusColor(selectedIncident.status)}>
                      {selectedIncident.status}
                    </Badge>
                  </CardTitle>
                  <h2 className="text-lg font-medium mt-1">{selectedIncident.title}</h2>
                </div>
                <Badge className={getSeverityColor(selectedIncident.severity)}>
                  {selectedIncident.severity} Severity
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Incident Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-medium mb-2">Incident Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Country:</span>
                      <span className="font-medium">{selectedIncident.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reported By:</span>
                      <span className="font-medium">{selectedIncident.reportedBy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reported Date:</span>
                      <span className="font-medium">{selectedIncident.reportedDate}</span>
                    </div>
                    {selectedIncident.resolvedDate && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Resolved Date:</span>
                        <span className="font-medium">{selectedIncident.resolvedDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedIncident.description}
                  </p>
                </div>
              </div>

              {/* Reporting Timeline */}
              <div>
                <h3 className="font-medium mb-4">NIS2 Reporting Timeline</h3>
                <div className="space-y-3">
                  {selectedIncident.timeline.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        milestone.completed ? 'bg-success' : 'bg-muted'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            milestone.completed ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {milestone.time}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {milestone.date}
                          </span>
                        </div>
                      </div>
                      {milestone.completed && (
                        <CheckCircle className="h-4 w-4 text-success" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Update
                </Button>
                {selectedIncident.status !== "Resolved" && (
                  <Button size="sm">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark Resolved
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}