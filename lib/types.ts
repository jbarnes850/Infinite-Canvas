// Add to existing types.ts
export interface HardwareInfo {
  deviceName: string;
  memoryGB: number;
  architecture: string;
  isActive: boolean;
}

export interface ClusterInfo {
  devices: HardwareInfo[];
  totalMemoryGB: number;
  activeDevices: number;
}