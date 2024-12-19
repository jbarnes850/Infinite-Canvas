"use client";

import { Cpu } from "lucide-react";
import { HardwareInfo } from "@/lib/types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

interface DeviceIndicatorProps {
  device: HardwareInfo;
}

export function DeviceIndicator({ device }: DeviceIndicatorProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center space-x-2 cursor-help">
          <Cpu className={`h-4 w-4 ${device.isActive ? "text-primary" : "text-muted-foreground"}`} />
          <span className="text-sm">{device.deviceName}</span>
          <Badge variant="secondary" className="text-xs">
            {device.memoryGB} GB
          </Badge>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">{device.deviceName}</h4>
          <div className="text-sm space-y-1">
            <p>Architecture: {device.architecture}</p>
            <p>Memory: {device.memoryGB} GB Unified Memory</p>
            <p>Status: {device.isActive ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}