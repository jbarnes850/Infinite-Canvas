export interface SystemMetric {
  timestamp: number;
  memoryUsage: number;
  gpuUtil: number;
  temperature: number;
}

export interface StyleMetric {
  name: string;
  value: number;
  description: string;
}