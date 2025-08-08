import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  status?: "success" | "warning" | "danger" | "info";
  progress?: number;
  trend?: {
    value: number;
    label: string;
  };
}

export default function StatusCard({
  title,
  value,
  description,
  icon: Icon,
  status = "info",
  progress,
  trend
}: StatusCardProps) {
  const statusColors = {
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-destructive text-destructive-foreground",
    info: "bg-info text-info-foreground"
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-md ${statusColors[status]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {trend && (
            <Badge variant="secondary" className="ml-2">
              {trend.value > 0 ? "+" : ""}{trend.value}% {trend.label}
            </Badge>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {progress !== undefined && (
          <div className="mt-3">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{progress}% Complete</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}