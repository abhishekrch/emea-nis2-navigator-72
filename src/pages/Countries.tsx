import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrapeForm } from "@/components/ScrapeForm";
import { 
  Filter, 
  Download, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  FileText,
  Calendar,
  XCircle
} from "lucide-react";

// Mock data for EU countries and Turkey
const countries = [
  {
    id: "at",
    name: "Austria",
    status: "In Progress",
    progress: 70,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Austrian Federal Ministry of Interior",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "be",
    name: "Belgium",
    status: "In Progress",
    progress: 85,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Centre for Cybersecurity Belgium (CCB)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "bg",
    name: "Bulgaria",
    status: "Assessment",
    progress: 35,
    lawStatus: "Draft",
    implementationDate: "2025-02-15",
    authority: "State e-Government Agency",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "hr",
    name: "Croatia",
    status: "In Progress",
    progress: 60,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National CERT (CERT.hr)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "cy",
    name: "Cyprus",
    status: "Pending",
    progress: 25,
    lawStatus: "Draft",
    implementationDate: "2025-03-01",
    authority: "Digital Security Authority",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "cz",
    name: "Czech Republic",
    status: "In Progress",
    progress: 75,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National Cyber and Information Security Agency (NÚKIB)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "dk",
    name: "Denmark",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Danish Agency for Digital Government",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "ee",
    name: "Estonia",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Information System Authority (RIA)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "fi",
    name: "Finland",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Finnish Transport and Communications Agency (Traficom)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "fr",
    name: "France",
    status: "In Progress",
    progress: 75,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "ANSSI (National Agency for Information Systems Security)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "de",
    name: "Germany",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "BSI (Federal Office for Information Security)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT", "Space"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "gr",
    name: "Greece",
    status: "Assessment",
    progress: 40,
    lawStatus: "Draft",
    implementationDate: "2025-01-15",
    authority: "National Telecommunications and Post Commission",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "hu",
    name: "Hungary",
    status: "In Progress",
    progress: 55,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National Cyber Security Center",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "ie",
    name: "Ireland",
    status: "In Progress",
    progress: 80,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National Cyber Security Centre (NCSC-IE)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "it",
    name: "Italy",
    status: "Pending",
    progress: 45,
    lawStatus: "Draft",
    implementationDate: "2024-12-15",
    authority: "ACN (National Cybersecurity Agency)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "lv",
    name: "Latvia",
    status: "In Progress",
    progress: 65,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Cert.lv",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "lt",
    name: "Lithuania",
    status: "In Progress",
    progress: 70,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National Cyber Security Centre",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "lu",
    name: "Luxembourg",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "CIRCL (Computer Incident Response Center Luxembourg)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "mt",
    name: "Malta",
    status: "Assessment",
    progress: 30,
    lawStatus: "Draft",
    implementationDate: "2025-02-28",
    authority: "Malta Information Technology Agency",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "nl",
    name: "Netherlands",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "NCSC (National Cyber Security Centre)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "pl",
    name: "Poland",
    status: "Assessment",
    progress: 30,
    lawStatus: "Draft",
    implementationDate: "2025-01-30",
    authority: "CERT.PL",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "pt",
    name: "Portugal",
    status: "In Progress",
    progress: 85,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "National Cybersecurity Center",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "ro",
    name: "Romania",
    status: "Assessment",
    progress: 35,
    lawStatus: "Draft",
    implementationDate: "2025-01-20",
    authority: "CERT-RO",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "sk",
    name: "Slovakia",
    status: "In Progress",
    progress: 60,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "SK-CERT",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "si",
    name: "Slovenia",
    status: "In Progress",
    progress: 75,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "SI-CERT",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "es",
    name: "Spain",
    status: "In Progress",
    progress: 80,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "CCN-CERT (National Cryptologic Center)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  },
  {
    id: "se",
    name: "Sweden",
    status: "Compliant",
    progress: 100,
    lawStatus: "Enacted",
    implementationDate: "2024-10-17",
    authority: "Swedish Civil Contingencies Agency (MSB)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: true },
      { id: 2, task: "Entity identification", completed: true },
      { id: 3, task: "Registration with authorities", completed: true },
      { id: 4, task: "Incident response team formation", completed: true },
      { id: 5, task: "Training program implementation", completed: true },
      { id: 6, task: "Compliance monitoring setup", completed: true }
    ]
  },
  {
    id: "tr",
    name: "Turkey",
    status: "Not Started",
    progress: 0,
    lawStatus: "Not Available",
    implementationDate: "TBD",
    authority: "Information and Communication Technologies Authority (BTK)",
    requirements: {
      essential: ["Energy", "Transport", "Banking", "Health"],
      important: ["Digital Services", "ICT"]
    },
    checklist: [
      { id: 1, task: "Legal framework assessment", completed: false },
      { id: 2, task: "Entity identification", completed: false },
      { id: 3, task: "Registration with authorities", completed: false },
      { id: 4, task: "Incident response team formation", completed: false },
      { id: 5, task: "Training program implementation", completed: false },
      { id: 6, task: "Compliance monitoring setup", completed: false }
    ]
  }
];

export default function Countries() {
  const [selectedCountryId, setSelectedCountryId] = useState(countries[0].id);
  
  const selectedCountry = countries.find(country => country.id === selectedCountryId) || countries[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Compliant": return "bg-success text-success-foreground";
      case "In Progress": return "bg-warning text-warning-foreground";
      case "Pending": return "bg-destructive text-destructive-foreground";
      case "Assessment": return "bg-info text-info-foreground";
      case "Not Started": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Compliant": return CheckCircle;
      case "In Progress": return Clock;
      case "Pending": return AlertCircle;
      case "Assessment": return FileText;
      case "Not Started": return XCircle;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Country Requirements</h1>
          <p className="text-muted-foreground mt-2">
            NIS2 implementation status and requirements by country
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Country Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Country</CardTitle>
            <p className="text-sm text-muted-foreground">
              Choose a country to view its NIS2 implementation details
            </p>
          </CardHeader>
          <CardContent>
            <Select value={selectedCountryId} onValueChange={setSelectedCountryId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => {
                  const StatusIcon = getStatusIcon(country.status);
                  return (
                    <SelectItem key={country.id} value={country.id}>
                      <div className="flex items-center gap-2">
                        <StatusIcon className="h-4 w-4" />
                        <span>{country.name}</span>
                        <Badge className={`ml-2 ${getStatusColor(country.status)}`} variant="secondary">
                          {country.status}
                        </Badge>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Country Details */}
        <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="checklist">Checklist</TabsTrigger>
              <TabsTrigger value="scraper">Update Info</TabsTrigger>
            </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {selectedCountry.name}
                  <Badge className={getStatusColor(selectedCountry.status)}>
                    {selectedCountry.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Implementation Progress</h3>
                    <Progress value={selectedCountry.progress} className="h-3" />
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedCountry.progress}% Complete
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Law Status</h3>
                    <Badge variant="outline" className={
                      selectedCountry.lawStatus === "Enacted" 
                        ? "border-success text-success" 
                        : selectedCountry.lawStatus === "Not Available"
                        ? "border-muted text-muted-foreground"
                        : "border-warning text-warning"
                    }>
                      {selectedCountry.lawStatus}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Key Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Implementation Date:</span>
                      <span className="font-medium">{selectedCountry.implementationDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Authority:</span>
                      <span className="font-medium">{selectedCountry.authority}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>Sector Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-destructive">Essential Entities</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.requirements.essential.map((sector) => (
                      <Badge key={sector} variant="destructive">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-warning">Important Entities</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.requirements.important.map((sector) => (
                      <Badge key={sector} className="bg-warning text-warning-foreground">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checklist">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Checklist</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Track progress of key NIS2 implementation tasks
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedCountry.checklist.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 p-2 rounded-lg border">
                      <Checkbox 
                        checked={item.completed}
                        className="data-[state=checked]:bg-success data-[state=checked]:border-success"
                      />
                      <span className={`flex-1 ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {item.task}
                      </span>
                      {item.completed && <CheckCircle className="h-4 w-4 text-success" />}
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scraper">
          <ScrapeForm />
        </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}