"use client";

import { AIModel } from "@/lib/types/models";
import { useHardwareInfo } from "@/lib/hooks/useHardwareInfo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

interface ModelRequirementsProps {
  model: AIModel;
}

export function ModelRequirements({ model }: ModelRequirementsProps) {
  const { totalMemoryGB } = useHardwareInfo();
  
  if (!model.requirements) return null;

  const hasMinMemory = totalMemoryGB >= model.requirements.minMemoryGB;
  const hasRecommendedMemory = totalMemoryGB >= model.requirements.recommendedMemoryGB;

  return (
    <Alert variant={hasMinMemory ? "default" : "destructive"} className="mt-2">
      <div className="flex items-center space-x-2">
        {hasRecommendedMemory ? (
          <CheckCircle2 className="h-4 w-4 text-primary" />
        ) : (
          <AlertTriangle className="h-4 w-4" />
        )}
        <AlertDescription>
          {hasRecommendedMemory ? (
            "Your system meets the recommended requirements"
          ) : hasMinMemory ? (
            "Your system meets minimum requirements but may experience slower performance"
          ) : (
            "Your system does not meet the minimum memory requirements"
          )}
        </AlertDescription>
      </div>
    </Alert>
  );
}