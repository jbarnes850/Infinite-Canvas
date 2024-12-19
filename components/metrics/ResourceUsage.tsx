"use client";

import { LineChart } from "./LineChart";
import { SystemMetric } from "@/lib/types/metrics";

interface ResourceUsageProps {
  metrics: SystemMetric[];
  totalMemoryGB: number;
}

export function ResourceUsage({ metrics, totalMemoryGB }: ResourceUsageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LineChart
        title="Memory Usage"
        data={metrics}
        dataKey="memoryUsage"
        stroke="hsl(var(--chart-1))"
        yAxisDomain={[0, totalMemoryGB]}
        formatValue={(value) => `${value.toFixed(1)} GB`}
      />
      <LineChart
        title="GPU Utilization"
        data={metrics}
        dataKey="gpuUtil"
        stroke="hsl(var(--chart-2))"
        yAxisDomain={[0, 100]}
        formatValue={(value) => `${value.toFixed(0)}%`}
      />
    </div>
  );
}