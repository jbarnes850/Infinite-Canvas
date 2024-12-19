"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, Clock, Server } from "lucide-react";
import { useHardwareInfo } from "@/lib/hooks/useHardwareInfo";

interface TrainingOptionProps {
  type: "finetune" | "train";
}

export function TrainingOptions({ type }: TrainingOptionProps) {
  const { totalMemoryGB, activeDevices } = useHardwareInfo();
  const memoryUsagePercent = (activeDevices / totalMemoryGB) * 100;

  const options = {
    finetune: {
      title: "Quick Start",
      description: "Fine-tune an existing model with your brand assets",
      duration: "~30 minutes",
      memoryRequired: "8GB"
    },
    train: {
      title: "Full Training",
      description: "Train a custom model from scratch with your data",
      duration: "~2-3 hours",
      memoryRequired: "32GB"
    }
  };

  const option = options[type];

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Zap className="h-4 w-4 text-primary" />
          <h4 className="font-medium">{option.title}</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          {option.description}
        </p>
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>{option.duration}</span>
        </div>
        <Badge variant="secondary">{option.memoryRequired} Memory Required</Badge>
      </Card>

      <Card className="p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Server className="h-4 w-4 text-primary" />
          <h4 className="font-medium">Available Resources</h4>
        </div>
        <Progress value={memoryUsagePercent} className="h-2" />
        <p className="text-sm text-muted-foreground">
          {activeDevices} devices active • {totalMemoryGB}GB total memory
        </p>
      </Card>
    </div>
  );
}