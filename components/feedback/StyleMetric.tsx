"use client";

import { Progress } from "@/components/ui/progress";
import { StyleMetric as StyleMetricType } from "@/lib/types/metrics";
import { Palette, Layout, Wand2 } from "lucide-react";

const metricIcons = {
  "Color Harmony": Palette,
  "Composition Quality": Layout,
  "Style Consistency": Wand2,
} as const;

interface StyleMetricProps {
  metric: StyleMetricType;
}

export function StyleMetric({ metric }: StyleMetricProps) {
  const Icon = metricIcons[metric.name as keyof typeof metricIcons];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
          <span className="text-sm font-medium">{metric.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{metric.value}%</span>
      </div>
      <Progress value={metric.value} className="h-2" />
      <p className="text-xs text-muted-foreground">
        {metric.description}
      </p>
    </div>
  );
}