"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StyleMetric } from "./StyleMetric";
import { StyleMetric as StyleMetricType } from "@/lib/types/metrics";

const styleMetrics: StyleMetricType[] = [
  {
    name: "Color Harmony",
    value: 88,
    description: "Excellent use of brand colors and palette consistency"
  },
  {
    name: "Composition Quality",
    value: 78,
    description: "Good balance and visual hierarchy in layouts"
  },
  {
    name: "Style Consistency",
    value: 92,
    description: "Very consistent application of brand style"
  },
  {
    name: "Brand Alignment",
    value: 85,
    description: "Strong adherence to brand guidelines and identity"
  }
];

export function StyleFeedback() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>Style Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {styleMetrics.map((metric) => (
            <StyleMetric key={metric.name} metric={metric} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}