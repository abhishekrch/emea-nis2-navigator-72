import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Play,
  FileText,
  Award,
  TrendingUp
} from "lucide-react";

const trainingPrograms = [
  {
    id: 1,
    title: "NIS2 Fundamentals for Directors",
    description: "Essential NIS2 knowledge for managing directors and board members",
    target: "Managing Directors",
    duration: "2 hours",
    format: "Online",
    status: "Active",
    completionRate: 85,
    enrolled: 12,
    completed: 10,
    modules: [
      { id: 1, title: "Introduction to NIS2", duration: "30 min", completed: true },
      { id: 2, title: "Legal Requirements", duration: "45 min", completed: true },
      { id: 3, title: "Risk Management", duration: "30 min", completed: false },
      { id: 4, title: "Incident Response", duration: "15 min", completed: false }
    ]
  },
  {
    id: 2,
    title: "Technical Implementation of NIS2",
    description: "Deep dive into technical aspects of NIS2 compliance",
    target: "IT Staff & Cybersecurity Teams",
    duration: "4 hours",
    format: "Hybrid",
    status: "Active",
    completionRate: 72,
    enrolled: 25,
    completed: 18,
    modules: [
      { id: 1, title: "Technical Requirements", duration: "60 min", completed: true },
      { id: 2, title: "Security Measures", duration: "90 min", completed: true },
      { id: 3, title: "Monitoring & Detection", duration: "60 min", completed: false },
      { id: 4, title: "Reporting Procedures", duration: "30 min", completed: false }
    ]
  },
  {
    id: 3,
    title: "NIS2 Awareness for All Employees",
    description: "General awareness training for all organizational staff",
    target: "All Employees",
    duration: "1 hour",
    format: "Online",
    status: "Active", 
    completionRate: 94,
    enrolled: 150,
    completed: 141,
    modules: [
      { id: 1, title: "What is NIS2?", duration: "15 min", completed: true },
      { id: 2, title: "Your Role in Compliance", duration: "20 min", completed: true },
      { id: 3, title: "Security Best Practices", duration: "20 min", completed: true },
      { id: 4, title: "Incident Reporting", duration: "5 min", completed: true }
    ]
  }
];

const upcomingSessions = [
  {
    id: 1,
    title: "NIS2 Risk Assessment Workshop",
    date: "2024-01-25",
    time: "10:00 - 12:00",
    instructor: "Sarah Johnson",
    attendees: 15,
    location: "Conference Room A / Online"
  },
  {
    id: 2,
    title: "Incident Response Simulation", 
    date: "2024-01-30",
    time: "14:00 - 17:00",
    instructor: "David Kumar",
    attendees: 8,
    location: "Cybersecurity Lab"
  },
  {
    id: 3,
    title: "Legal Update Session",
    date: "2024-02-05",
    time: "09:00 - 10:30",
    instructor: "Michael Chen",
    attendees: 20,
    location: "Online"
  }
];

const trainingRecords = [
  {
    id: 1,
    employee: "Emma Rodriguez",
    department: "Communications",
    program: "NIS2 Awareness for All Employees",
    completedDate: "2024-01-15",
    score: 95,
    certificateId: "CERT-001"
  },
  {
    id: 2,
    employee: "Lisa Thompson",
    department: "HR",
    program: "NIS2 Fundamentals for Directors", 
    completedDate: "2024-01-14",
    score: 88,
    certificateId: "CERT-002"
  },
  {
    id: 3,
    employee: "John Mitchell",
    department: "IT",
    program: "Technical Implementation of NIS2",
    completedDate: "2024-01-12",
    score: 92,
    certificateId: "CERT-003"
  }
];

export default function Training() {
  const [selectedProgram, setSelectedProgram] = useState(trainingPrograms[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Draft": return "bg-warning text-warning-foreground";
      case "Archived": return "bg-muted text-muted-foreground";
      default: return "bg-info text-info-foreground";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Training & Awareness</h1>
          <p className="text-muted-foreground mt-2">
            Manage NIS2 training programs and track completion across the organization
          </p>
        </div>
        <Button>
          <GraduationCap className="h-4 w-4 mr-2" />
          Create Program
        </Button>
      </div>

      {/* Training Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Active Programs</span>
            </div>
            <p className="text-2xl font-bold mt-2">{trainingPrograms.filter(p => p.status === "Active").length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-muted-foreground">Total Enrolled</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {trainingPrograms.reduce((sum, p) => sum + p.enrolled, 0)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-muted-foreground">Completed</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {trainingPrograms.reduce((sum, p) => sum + p.completed, 0)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-info" />
              <span className="text-sm font-medium text-muted-foreground">Avg. Completion</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {Math.round(trainingPrograms.reduce((sum, p) => sum + p.completionRate, 0) / trainingPrograms.length)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="programs" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="programs">Training Programs</TabsTrigger>
          <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="records">Training Records</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="programs">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Program List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Training Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trainingPrograms.map((program) => (
                      <div
                        key={program.id}
                        onClick={() => setSelectedProgram(program)}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedProgram.id === program.id 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:bg-accent"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getStatusColor(program.status)}>
                            {program.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <h3 className="font-medium text-sm mb-1">{program.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{program.target}</p>
                        <Progress value={program.completionRate} className="h-1" />
                        <p className="text-xs text-muted-foreground mt-1">
                          {program.completed}/{program.enrolled} completed ({program.completionRate}%)
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Program Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedProgram.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedProgram.description}
                      </p>
                    </div>
                    <Badge className={getStatusColor(selectedProgram.status)}>
                      {selectedProgram.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Program Info */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="font-medium mb-2">Program Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Target Audience:</span>
                          <span className="font-medium">{selectedProgram.target}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{selectedProgram.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Format:</span>
                          <span className="font-medium">{selectedProgram.format}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Enrollment Stats</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Enrolled:</span>
                          <span className="font-medium">{selectedProgram.enrolled}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Completed:</span>
                          <span className="font-medium">{selectedProgram.completed}</span>
                        </div>
                        <Progress value={selectedProgram.completionRate} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {selectedProgram.completionRate}% completion rate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <h3 className="font-medium mb-3">Training Modules</h3>
                    <div className="space-y-2">
                      {selectedProgram.modules.map((module) => (
                        <div key={module.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <Play className="h-5 w-5 text-muted-foreground" />
                          )}
                          <div className="flex-1">
                            <span className={`font-medium ${module.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {module.title}
                            </span>
                            <p className="text-sm text-muted-foreground">{module.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Start Training
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Enrollment
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sessions">
          <div className="grid gap-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{session.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{session.date}</span>
                          <span>{session.time}</span>
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-medium">{session.instructor}</p>
                      <Badge variant="secondary" className="mt-1">
                        {session.attendees} attendees
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="records">
          <Card>
            <CardHeader>
              <CardTitle>Training Completion Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(record.employee)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{record.employee}</p>
                        <p className="text-sm text-muted-foreground">{record.department}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{record.program}</p>
                      <p className="text-sm text-muted-foreground">Completed: {record.completedDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success text-success-foreground">
                          Score: {record.score}%
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Award className="h-4 w-4 mr-2" />
                          Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Completion Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingPrograms.map((program) => (
                    <div key={program.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{program.title}</span>
                        <span>{program.completionRate}%</span>
                      </div>
                      <Progress value={program.completionRate} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { dept: "IT Security", progress: 95 },
                    { dept: "Legal", progress: 88 },
                    { dept: "Communications", progress: 92 },
                    { dept: "Management", progress: 75 },
                    { dept: "HR", progress: 89 }
                  ].map((dept) => (
                    <div key={dept.dept}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{dept.dept}</span>
                        <span>{dept.progress}%</span>
                      </div>
                      <Progress value={dept.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}