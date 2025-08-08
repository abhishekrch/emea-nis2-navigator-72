import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ScrapeForm } from "@/components/ScrapeForm";
import { 
  BookOpen, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText,
  Download,
  ExternalLink,
  Scale,
  Users,
  Calendar
} from "lucide-react";

const euGuidelines = {
  overview: {
    title: "NIS2 Directive Overview",
    description: "The Network and Information Systems (NIS2) Directive strengthens cybersecurity requirements across the EU",
    keyPoints: [
      "Replaces the original NIS Directive (2016/1148)",
      "Applies to essential and important entities",
      "Member states must transpose by October 17, 2024",
      "Enhanced incident reporting requirements",
      "Mandatory cybersecurity risk management measures"
    ]
  },
  scope: {
    essentialSectors: [
      "Energy (electricity, district heating and cooling, oil, gas, hydrogen)",
      "Transport (air, rail, water, road)",
      "Banking",
      "Financial market infrastructures",
      "Health",
      "Drinking water",
      "Waste water",
      "Digital infrastructure",
      "ICT service management (B2B)",
      "Public administration",
      "Space"
    ],
    importantSectors: [
      "Postal and courier services",
      "Waste management",
      "Manufacturing of chemicals, pharmaceuticals, machinery, motor vehicles, medical devices",
      "Digital providers",
      "Research organizations"
    ]
  },
  compliance: {
    phases: [
      {
        phase: "Phase 1: Preparation",
        timeline: "6-12 months before implementation",
        tasks: [
          "Assess applicability to your organization",
          "Identify essential vs important entity classification",
          "Conduct gap analysis against current cybersecurity measures",
          "Establish governance structure"
        ]
      },
      {
        phase: "Phase 2: Implementation",
        timeline: "Implementation date to 6 months after",
        tasks: [
          "Implement required cybersecurity measures",
          "Establish incident response procedures",
          "Register with national authorities",
          "Train staff and management"
        ]
      },
      {
        phase: "Phase 3: Ongoing Compliance",
        timeline: "Continuous",
        tasks: [
          "Regular risk assessments",
          "Incident monitoring and reporting",
          "Compliance audits",
          "Continuous improvement"
        ]
      }
    ]
  }
};

const requirements = [
  {
    category: "Risk Management",
    mandatory: true,
    description: "Policies on cybersecurity risk analysis and information systems security",
    details: [
      "Regular cybersecurity risk assessments",
      "Implementation of risk management frameworks",
      "Documentation of security policies and procedures",
      "Board-level oversight and accountability"
    ]
  },
  {
    category: "Incident Handling",
    mandatory: true,
    description: "Procedures for handling and reporting cybersecurity incidents",
    details: [
      "24-hour initial incident notification",
      "72-hour detailed incident report",
      "Final report within one month",
      "Incident response team establishment"
    ]
  },
  {
    category: "Business Continuity",
    mandatory: true,
    description: "Business continuity and crisis management including backup and disaster recovery",
    details: [
      "Business impact assessments",
      "Backup and recovery procedures",
      "Crisis management plans",
      "Regular testing and exercises"
    ]
  },
  {
    category: "Supply Chain Security",
    mandatory: true,
    description: "Security measures related to suppliers and service providers",
    details: [
      "Supplier cybersecurity requirements",
      "Third-party risk assessments",
      "Contractual security obligations",
      "Supply chain monitoring"
    ]
  }
];

export default function Guidelines() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">EU NIS2 Guidelines</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive guidance on NIS2 Directive implementation across the European Union
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Guidelines
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Official EU Documentation
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scope">Scope</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="scraper">Update Info</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {euGuidelines.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {euGuidelines.overview.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Points:</h4>
                  <ul className="space-y-2">
                    {euGuidelines.overview.keyPoints.map((point, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Implementation Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">EU Directive Published</span>
                    <Badge variant="outline">December 2022</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Transposition Deadline</span>
                    <Badge className="bg-warning text-warning-foreground">October 17, 2024</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Full Compliance Required</span>
                    <Badge className="bg-destructive text-destructive-foreground">October 17, 2024</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Most member states have enacted national legislation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scope">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-destructive" />
                  Essential Entities
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  High-impact sectors with stricter requirements
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {euGuidelines.scope.essentialSectors.map((sector, index) => (
                    <Badge key={index} variant="destructive" className="mr-1 mb-1">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Important Entities
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Significant impact sectors with proportionate requirements
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {euGuidelines.scope.importantSectors.map((sector, index) => (
                    <Badge key={index} className="bg-warning text-warning-foreground mr-1 mb-1">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requirements">
          <div className="space-y-6">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      {req.category}
                    </CardTitle>
                    <Badge variant={req.mandatory ? "destructive" : "secondary"}>
                      {req.mandatory ? "Mandatory" : "Recommended"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {req.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">Implementation Details:</h4>
                    <ul className="space-y-2">
                      {req.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance">
          <div className="space-y-6">
            {euGuidelines.compliance.phases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {phase.phase}
                  </CardTitle>
                  <Badge variant="outline">{phase.timeline}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-3 p-3 border rounded-lg">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scraper">
          <ScrapeForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}