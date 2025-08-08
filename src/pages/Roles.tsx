import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Users, 
  Shield, 
  Scale, 
  MessageSquare, 
  GraduationCap,
  Mail,
  Phone,
  Building
} from "lucide-react";

// Generate 28 NIS2 coordinators for each country
const coordinators = [
  { name: "Sarah Johnson", country: "Germany", email: "sarah.johnson@company.com", phone: "+49 123 456 7890" },
  { name: "Marie Dubois", country: "France", email: "marie.dubois@company.com", phone: "+33 123 456 789" },
  { name: "Jan van der Berg", country: "Netherlands", email: "jan.vandenberg@company.com", phone: "+31 123 456 789" },
  { name: "Hans Müller", country: "Austria", email: "hans.mueller@company.com", phone: "+43 123 456 789" },
  { name: "Sophie Laurent", country: "Belgium", email: "sophie.laurent@company.com", phone: "+32 123 456 789" },
  { name: "Ivan Petrov", country: "Bulgaria", email: "ivan.petrov@company.com", phone: "+359 123 456 789" },
  { name: "Marko Horvat", country: "Croatia", email: "marko.horvat@company.com", phone: "+385 123 456 789" },
  { name: "Andreas Georgiou", country: "Cyprus", email: "andreas.georgiou@company.com", phone: "+357 123 456 789" },
  { name: "Pavel Novák", country: "Czech Republic", email: "pavel.novak@company.com", phone: "+420 123 456 789" },
  { name: "Lars Nielsen", country: "Denmark", email: "lars.nielsen@company.com", phone: "+45 123 456 789" },
  { name: "Kadri Tamm", country: "Estonia", email: "kadri.tamm@company.com", phone: "+372 123 456 789" },
  { name: "Elina Virtanen", country: "Finland", email: "elina.virtanen@company.com", phone: "+358 123 456 789" },
  { name: "Nikos Papadopoulos", country: "Greece", email: "nikos.papadopoulos@company.com", phone: "+30 123 456 789" },
  { name: "Zoltán Nagy", country: "Hungary", email: "zoltan.nagy@company.com", phone: "+36 123 456 789" },
  { name: "Seán O'Connor", country: "Ireland", email: "sean.oconnor@company.com", phone: "+353 123 456 789" },
  { name: "Marco Rossi", country: "Italy", email: "marco.rossi@company.com", phone: "+39 123 456 789" },
  { name: "Aigars Ozols", country: "Latvia", email: "aigars.ozols@company.com", phone: "+371 123 456 789" },
  { name: "Vytautas Kazlauskas", country: "Lithuania", email: "vytautas.kazlauskas@company.com", phone: "+370 123 456 789" },
  { name: "Pierre Weber", country: "Luxembourg", email: "pierre.weber@company.com", phone: "+352 123 456 789" },
  { name: "David Mifsud", country: "Malta", email: "david.mifsud@company.com", phone: "+356 123 456 789" },
  { name: "Piotr Kowalski", country: "Poland", email: "piotr.kowalski@company.com", phone: "+48 123 456 789" },
  { name: "João Silva", country: "Portugal", email: "joao.silva@company.com", phone: "+351 123 456 789" },
  { name: "Andrei Popescu", country: "Romania", email: "andrei.popescu@company.com", phone: "+40 123 456 789" },
  { name: "Peter Novotný", country: "Slovakia", email: "peter.novotny@company.com", phone: "+421 123 456 789" },
  { name: "Maja Kovač", country: "Slovenia", email: "maja.kovac@company.com", phone: "+386 123 456 789" },
  { name: "Carlos García", country: "Spain", email: "carlos.garcia@company.com", phone: "+34 123 456 789" },
  { name: "Erik Andersson", country: "Sweden", email: "erik.andersson@company.com", phone: "+46 123 456 789" },
  { name: "Mehmet Öz", country: "Turkey", email: "mehmet.oz@company.com", phone: "+90 123 456 789" }
];

const roles = [
  {
    id: 1,
    title: "NIS 2 Coordinators",
    department: "Compliance",
    responsibilities: [
      "Oversee local implementation and compliance per country",
      "Report incidents to national authorities", 
      "Coordinate with legal, communication, and cybersecurity teams",
      "Continuously monitor compliance status of legal entities",
      "Maintain detailed records of compliance activities and documentation"
    ],
    assignedTo: coordinators,
    workload: 85,
    color: "bg-primary text-primary-foreground"
  },
  {
    id: 2,
    title: "Managing Directors",
    department: "Executive",
    responsibilities: [
      "Ensure legal entities are compliant with NIS 2",
      "Complete mandatory training",
      "Support the NIS 2 coordinator in compliance activities"
    ],
    assignedTo: [
      { name: "Multiple Directors", country: "All Countries", email: "directors@company.com", phone: "+49 123 456 7891" }
    ],
    workload: 65,
    color: "bg-info text-info-foreground"
  },
  {
    id: 3,
    title: "Legal Department",
    department: "Legal",
    responsibilities: [
      "Provide legal guidance on NIS 2 requirements",
      "Assist in incident reporting and compliance documentation"
    ],
    assignedTo: [
      { name: "Michael Chen", country: "EU Region", email: "michael.chen@company.com", phone: "+49 123 456 7892" }
    ],
    workload: 70,
    color: "bg-success text-success-foreground"
  },
  {
    id: 4,
    title: "Communication Department",
    department: "Communications",
    responsibilities: [
      "Manage communication with authorities and stakeholders",
      "Support the NIS 2 coordinator in incident reporting"
    ],
    assignedTo: [
      { name: "Emma Rodriguez", country: "EU Region", email: "emma.rodriguez@company.com", phone: "+49 123 456 7893" }
    ],
    workload: 55,
    color: "bg-warning text-warning-foreground"
  },
  {
    id: 5,
    title: "Cybersecurity Team",
    department: "IT Security",
    responsibilities: [
      "Detect and manage cybersecurity incidents",
      "Collaborate with the NIS 2 coordinator for incident reporting"
    ],
    assignedTo: [
      { name: "David Kumar", country: "EU Region", email: "david.kumar@company.com", phone: "+49 123 456 7894" }
    ],
    workload: 90,
    color: "bg-destructive text-destructive-foreground"
  },
  {
    id: 6,
    title: "Training Department",
    department: "Human Resources",
    responsibilities: [
      "Conduct mandatory NIS 2 training for managing directors and employees",
      "Track and record training completion"
    ],
    assignedTo: [
      { name: "Lisa Thompson", country: "EU Region", email: "lisa.thompson@company.com", phone: "+49 123 456 7895" }
    ],
    workload: 60,
    color: "bg-info text-info-foreground"
  }
];

const teamStructure = {
  "Incident Response Team": [
    "NIS 2 Coordinator",
    "Legal Department", 
    "Communication Department",
    "Cybersecurity Team"
  ],
  "Compliance Team": [
    "NIS 2 Coordinator",
    "Legal Department",
    "Cybersecurity Team"
  ],
  "Training Team": [
    "NIS 2 Coordinator", 
    "Training Department"
  ]
};

export default function Roles() {
  const getIcon = (department: string) => {
    switch (department) {
      case "Compliance": return Shield;
      case "Executive": return Building;
      case "Legal": return Scale;
      case "Communications": return MessageSquare;
      case "IT Security": return Shield;
      case "Human Resources": return GraduationCap;
      default: return User;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Roles & Responsibilities</h1>
        <p className="text-muted-foreground mt-2">
          NIS2 compliance team structure and role assignments
        </p>
      </div>

      {/* Team Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(teamStructure).map(([teamName, members]) => (
          <Card key={teamName}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5" />
                {teamName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {members.map((member) => (
                  <Badge key={member} variant="secondary" className="mr-1 mb-1">
                    {member}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Role Details */}
      <div className="grid gap-6">
        {roles.map((role) => {
          const IconComponent = getIcon(role.department);
          return (
            <Card key={role.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${role.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{role.department}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{role.workload}% Capacity</Badge>
                </div>
                <Progress value={role.workload} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Responsibilities */}
                  <div>
                    <h3 className="font-medium mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {role.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Assigned Personnel */}
                  <div>
                    <h3 className="font-medium mb-3">Assigned Personnel</h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {role.assignedTo.map((person, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {getInitials(person.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{person.name}</p>
                            <p className="text-xs text-muted-foreground">{person.country}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {person.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {person.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <User className="h-4 w-4 mr-2" />
                        Update Assignment
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact All
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Hierarchy Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Hierarchy of Responsibilities</CardTitle>
          <p className="text-sm text-muted-foreground">
            Reporting structure and escalation paths
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-block p-4 bg-primary text-primary-foreground rounded-lg">
                <Shield className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">NIS 2 Coordinator</div>
                <div className="text-xs opacity-80">Central Authority</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-px h-8 bg-border"></div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Legal Department", icon: Scale },
                { title: "Communication Dept", icon: MessageSquare },
                { title: "Cybersecurity Team", icon: Shield },
                { title: "Training Department", icon: GraduationCap }
              ].map((dept) => (
                <div key={dept.title} className="text-center">
                  <div className="inline-block p-3 bg-accent rounded-lg">
                    <dept.icon className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-sm font-medium">{dept.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}