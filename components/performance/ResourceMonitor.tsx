"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHardwareInfo } from "@/lib/hooks/useHardwareInfo";
import { SystemMetric } from "@/lib/types/metrics";
import { ResourceUsage } from "@/components/metrics/ResourceUsage";

export function ResourceMonitor() {
  const { devices, totalMemoryGB } = useHardwareInfo();
  const [metrics, setMetrics] = useState<SystemMetric[]>([]);

  // Simulate real-time metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const now = Date.now();
        const newPoint: SystemMetric = {
          timestamp: now,
          memoryUsage: Math.random() * totalMemoryGB * 0.8,
          gpuUtil: Math.random() * 100,
          temperature: 45 + Math.random() * 20,
        };
        return [...prev.slice(-20), newPoint];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalMemoryGB]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <ResourceUsage metrics={metrics} totalMemoryGB={totalMemoryGB} />
      </CardContent>
    </Card>
  );
}