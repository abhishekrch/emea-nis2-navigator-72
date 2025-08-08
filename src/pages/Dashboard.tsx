import StatusCard from "@/components/dashboard/StatusCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  FileText,
  TrendingUp
} from "lucide-react";

// Updated stats based on all EU countries + Turkey
const complianceStats = [
  { country: "Denmark", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Estonia", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Finland", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Germany", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Luxembourg", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Netherlands", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Sweden", status: "Compliant", progress: 100, lastUpdate: "2024-01-15" },
  { country: "Belgium", status: "In Progress", progress: 85, lastUpdate: "2024-01-14" },
  { country: "Portugal", status: "In Progress", progress: 85, lastUpdate: "2024-01-14" },
  { country: "Ireland", status: "In Progress", progress: 80, lastUpdate: "2024-01-14" },
  { country: "Spain", status: "In Progress", progress: 80, lastUpdate: "2024-01-14" },
  { country: "Czech Republic", status: "In Progress", progress: 75, lastUpdate: "2024-01-14" },
  { country: "France", status: "In Progress", progress: 75, lastUpdate: "2024-01-14" },
  { country: "Slovenia", status: "In Progress", progress: 75, lastUpdate: "2024-01-14" },
  { country: "Austria", status: "In Progress", progress: 70, lastUpdate: "2024-01-13" },
  { country: "Lithuania", status: "In Progress", progress: 70, lastUpdate: "2024-01-13" },
  { country: "Latvia", status: "In Progress", progress: 65, lastUpdate: "2024-01-13" },
  { country: "Croatia", status: "In Progress", progress: 60, lastUpdate: "2024-01-13" },
  { country: "Slovakia", status: "In Progress", progress: 60, lastUpdate: "2024-01-13" },
  { country: "Hungary", status: "In Progress", progress: 55, lastUpdate: "2024-01-13" },
  { country: "Italy", status: "Pending", progress: 45, lastUpdate: "2024-01-12" },
  { country: "Greece", status: "Assessment", progress: 40, lastUpdate: "2024-01-12" },
  { country: "Bulgaria", status: "Assessment", progress: 35, lastUpdate: "2024-01-12" },
  { country: "Romania", status: "Assessment", progress: 35, lastUpdate: "2024-01-12" },
  { country: "Poland", status: "Assessment", progress: 30, lastUpdate: "2024-01-10" },
  { country: "Malta", status: "Assessment", progress: 30, lastUpdate: "2024-01-10" },
  { country: "Cyprus", status: "Assessment", progress: 25, lastUpdate: "2024-01-10" },
  { country: "Turkey", status: "Not Started", progress: 0, lastUpdate: "2024-01-10" },
];

const recentIncidents = [
  { id: "INC-001", country: "Germany", severity: "High", status: "Resolved", date: "2024-01-14" },
  { id: "INC-002", country: "France", severity: "Medium", status: "In Progress", date: "2024-01-13" },
  { id: "INC-003", country: "Netherlands", severity: "Low", status: "Resolved", date: "2024-01-12" },
];

export default function Dashboard() {
  const totalCountries = 28; // 27 EU countries + Turkey
  const compliantCountries = 7; // Denmark, Estonia, Finland, Germany, Luxembourg, Netherlands, Sweden
  const overallProgress = Math.round(complianceStats.reduce((acc, c) => acc + c.progress, 0) / totalCountries);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">NIS2 Compliance Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Monitor NIS2 compliance status across EMEA region
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatusCard
          title="Total Countries"
          value={totalCountries}
          description="EMEA countries monitored"
          icon={Globe}
          status="info"
        />
        <StatusCard
          title="Compliant Countries"
          value={compliantCountries}
          description={`${Math.round((compliantCountries / totalCountries) * 100)}% compliance rate`}
          icon={CheckCircle}
          status="success"
        />
        <StatusCard
          title="Overall Progress"
          value={`${overallProgress}%`}
          description="Average implementation progress"
          icon={TrendingUp}
          status="info"
          progress={overallProgress}
        />
        <StatusCard
          title="Active Incidents"
          value={recentIncidents.filter(i => i.status === "In Progress").length}
          description="Requiring immediate attention"
          icon={AlertTriangle}
          status="warning"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Country Compliance Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Country Compliance Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceStats.map((country) => {
                const statusColors = {
                  "Compliant": "success",
                  "In Progress": "warning",
                  "Pending": "destructive",
                  "Assessment": "info"
                } as const;
                
                return (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{country.country}</span>
                        <Badge variant="secondary" className={
                          country.status === "Compliant" ? "bg-success text-success-foreground" :
                          country.status === "In Progress" ? "bg-warning text-warning-foreground" :
                          country.status === "Pending" ? "bg-destructive text-destructive-foreground" :
                          country.status === "Not Started" ? "bg-muted text-muted-foreground" :
                          "bg-info text-info-foreground"
                        }>
                          {country.status}
                        </Badge>
                      </div>
                      <Progress value={country.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {country.progress}% • Updated {country.lastUpdate}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recent Incidents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{incident.id}</span>
                      <Badge variant="outline" className={
                        incident.severity === "High" ? "border-destructive text-destructive" :
                        incident.severity === "Medium" ? "border-warning text-warning" :
                        "border-muted text-muted-foreground"
                      }>
                        {incident.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {incident.country} • {incident.date}
                    </p>
                  </div>
                  <Badge variant={incident.status === "Resolved" ? "default" : "secondary"}>
                    {incident.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium">Generate Report</h3>
                <p className="text-sm text-muted-foreground">Create compliance report</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <div>
                <h3 className="font-medium">Report Incident</h3>
                <p className="text-sm text-muted-foreground">Submit new incident</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors">
              <Users className="h-8 w-8 text-info" />
              <div>
                <h3 className="font-medium">Manage Teams</h3>
                <p className="text-sm text-muted-foreground">Update team assignments</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}