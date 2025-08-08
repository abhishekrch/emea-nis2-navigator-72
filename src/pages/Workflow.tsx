import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Circle, 
  Users, 
  FileText, 
  AlertTriangle,
  Clock,
  ChevronRight,
  PlayCircle
} from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    phase: "Initial Assessment",
    steps: [
      {
        id: "1.1",
        title: "Verify if NIS 2 law is available in the country",
        role: "NIS 2 Coordinator",
        description: "Check legal framework and implementation status",
        status: "completed"
      },
      {
        id: "1.2", 
        title: "Identify legal entities under NIS 2 and their category (important or essential)",
        role: "NIS 2 Coordinator",
        description: "Map all entities that fall under NIS2 requirements",
        status: "completed"
      }
    ]
  },
  {
    id: 2,
    phase: "Registration",
    steps: [
      {
        id: "2.1",
        title: "Register legal entities with public authorities",
        role: "NIS 2 Coordinator",
        description: "Submit registration forms to national authorities",
        status: "in-progress"
      },
      {
        id: "2.2",
        title: "Submit necessary details (public IPs, domain names, NIS 2 coordinator)",
        role: "NIS 2 Coordinator", 
        description: "Provide technical and organizational details",
        status: "pending"
      }
    ]
  },
  {
    id: 3,
    phase: "Incident Management",
    steps: [
      {
        id: "3.1",
        title: "Form an incident response team",
        role: "NIS 2 Coordinator, Legal Department, Communication Department, Cybersecurity Team",
        description: "Establish cross-functional incident response team",
        status: "completed"
      },
      {
        id: "3.2",
        title: "Report major incidents within 24 hours, update within 72 hours, and submit a complete report within one month",
        role: "NIS 2 Coordinator, Incident Response Team",
        description: "Implement incident reporting procedures",
        status: "in-progress"
      }
    ]
  },
  {
    id: 4,
    phase: "Training and Awareness",
    steps: [
      {
        id: "4.1",
        title: "Conduct mandatory NIS 2 training for managing directors and employees",
        role: "NIS 2 Coordinator, Training Department",
        description: "Deliver comprehensive NIS2 training programs",
        status: "pending"
      },
      {
        id: "4.2",
        title: "Track and record training completion",
        role: "NIS 2 Coordinator, Training Department",
        description: "Maintain training records and compliance tracking",
        status: "pending"
      }
    ]
  },
  {
    id: 5,
    phase: "Compliance and Audits",
    steps: [
      {
        id: "5.1",
        title: "Ensure compliance with NIS 2 requirements (risk management, asset management, incident management)",
        role: "NIS 2 Coordinator, Legal Department, Cybersecurity Team",
        description: "Implement comprehensive compliance framework",
        status: "pending"
      },
      {
        id: "5.2",
        title: "Prepare for potential audits by authorities",
        role: "NIS 2 Coordinator, Legal Department, Cybersecurity Team",
        description: "Establish audit readiness procedures",
        status: "pending"
      }
    ]
  },
  {
    id: 6,
    phase: "Ongoing Monitoring",
    steps: [
      {
        id: "6.1",
        title: "Continuously monitor compliance status of legal entities",
        role: "NIS 2 Coordinator",
        description: "Implement continuous monitoring systems",
        status: "pending"
      },
      {
        id: "6.2",
        title: "Maintain detailed records of compliance activities and documentation",
        role: "NIS 2 Coordinator",
        description: "Ensure comprehensive documentation and record keeping",
        status: "pending"
      }
    ]
  }
];

export default function Workflow() {
  const [activePhase, setActivePhase] = useState(1);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-5 w-5 text-success" />;
      case "in-progress": return <Clock className="h-5 w-5 text-warning" />;
      case "pending": return <Circle className="h-5 w-5 text-muted-foreground" />;
      default: return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-warning text-warning-foreground">In Progress</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const calculatePhaseProgress = (phase: any) => {
    const completedSteps = phase.steps.filter((step: any) => step.status === "completed").length;
    return Math.round((completedSteps / phase.steps.length) * 100);
  };

  const overallProgress = Math.round(
    workflowSteps.reduce((acc, phase) => acc + calculatePhaseProgress(phase), 0) / workflowSteps.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">NIS2 Implementation Workflow</h1>
        <p className="text-muted-foreground mt-2">
          Step-by-step guide for NIS2 compliance implementation
        </p>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Implementation Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Total Progress</span>
              <span className="text-sm text-muted-foreground">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Phase Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workflowSteps.map((phase) => {
                  const progress = calculatePhaseProgress(phase);
                  return (
                    <div
                      key={phase.id}
                      onClick={() => setActivePhase(phase.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        activePhase === phase.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{phase.phase}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Progress value={progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {progress}% complete
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase Details */}
        <div className="lg:col-span-3">
          {workflowSteps
            .filter(phase => phase.id === activePhase)
            .map((phase) => (
              <Card key={phase.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {phase.id}
                    </span>
                    {phase.phase}
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <Progress value={calculatePhaseProgress(phase)} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground">
                      {calculatePhaseProgress(phase)}% complete
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {phase.steps.map((step, index) => (
                      <div key={step.id}>
                        <div className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0 mt-1">
                            {getStatusIcon(step.status)}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{step.title}</h3>
                              {getStatusBadge(step.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {step.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Responsible:</span>
                              <Badge variant="outline">{step.role}</Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <FileText className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                              {step.status === "pending" && (
                                <Button size="sm">
                                  <PlayCircle className="h-4 w-4 mr-2" />
                                  Start Task
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                        {index < phase.steps.length - 1 && (
                          <div className="flex justify-center">
                            <Separator orientation="vertical" className="h-6" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Export Workflow</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Assign Tasks</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <AlertTriangle className="h-6 w-6" />
              <span>Report Issue</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <CheckCircle className="h-6 w-6" />
              <span>Mark Complete</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}