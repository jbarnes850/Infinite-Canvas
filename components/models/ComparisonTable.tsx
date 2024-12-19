"use client";

import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ComparisonTable() {
  const features = [
    {
      name: "Privacy & Data Control",
      infinite: "Complete privacy, data never leaves your device",
      others: "Data sent to cloud servers"
    },
    {
      name: "Training Speed",
      infinite: "Fast local training with MLX optimization",
      others: "Variable speed, dependent on server load"
    },
    {
      name: "Cost",
      infinite: "No usage fees or API costs",
      others: "Pay-per-use or subscription fees"
    },
    {
      name: "Output Quality",
      infinite: "Uncompromised, high-fidelity results",
      others: "Quality may vary due to quantization"
    }
  ];

  return (
    <Card className="p-6 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="font-medium">Feature</div>
          <div className="font-medium text-primary">Infinite Canvas</div>
          <div className="font-medium text-muted-foreground">Other Platforms</div>
        </div>
        
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.name} className="grid grid-cols-3 gap-4">
              <div className="text-sm">{feature.name}</div>
              <div className="text-sm flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>{feature.infinite}</span>
              </div>
              <div className="text-sm flex items-center space-x-2 text-muted-foreground">
                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>{feature.others}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}