"use client";

import { AIModel } from "@/lib/types/models";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ModelCardProps {
  model: AIModel;
}

export function ModelCard({ model }: ModelCardProps) {
  const getStatusColor = (status: AIModel["status"]) => {
    switch (status) {
      case "stable":
        return "bg-green-500/10 text-green-500";
      case "beta":
        return "bg-blue-500/10 text-blue-500";
      case "dev":
        return "bg-yellow-500/10 text-yellow-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{model.name}</CardTitle>
          <Badge 
            variant="secondary" 
            className={cn(getStatusColor(model.status))}
          >
            {model.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {model.description}
        </p>
        {model.capabilities && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Capabilities</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              {model.capabilities.map((capability) => (
                <li key={capability}>• {capability}</li>
              ))}
            </ul>
          </div>
        )}
        {model.requirements && (
          <div className="text-xs text-muted-foreground">
            Recommended: {model.requirements.recommendedMemoryGB}GB Memory
          </div>
        )}
      </CardContent>
    </Card>
  );
}