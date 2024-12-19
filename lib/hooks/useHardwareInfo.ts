"use client";

import { useState, useEffect } from "react";
import { ClusterInfo, HardwareInfo } from "@/lib/types";

// Simulated hardware detection for demo purposes
const MOCK_CLUSTER: HardwareInfo[] = [
  {
    deviceName: "Mac Studio",
    memoryGB: 192,
    architecture: "M2 Ultra",
    isActive: true
  },
  {
    deviceName: "MacBook Pro",
    memoryGB: 64,
    architecture: "M3 Max",
    isActive: true
  }
];

export function useHardwareInfo() {
  const [clusterInfo, setClusterInfo] = useState<ClusterInfo>({
    devices: [],
    totalMemoryGB: 0,
    activeDevices: 0
  });

  useEffect(() => {
    // In a real app, this would detect actual hardware
    const devices = MOCK_CLUSTER;
    const totalMemoryGB = devices.reduce((sum, device) => sum + device.memoryGB, 0);
    const activeDevices = devices.filter(device => device.isActive).length;

    setClusterInfo({
      devices,
      totalMemoryGB,
      activeDevices
    });
  }, []);

  return clusterInfo;
}