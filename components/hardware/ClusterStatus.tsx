"use client";

import { Server } from "lucide-react";
import { useHardwareInfo } from "@/lib/hooks/useHardwareInfo";
import { DeviceCard } from "./DeviceCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ClusterStatus() {
  const { devices, totalMemoryGB, activeDevices } = useHardwareInfo();

  return (
    <Card className="fixed bottom-4 left-4 bg-card/80 backdrop-blur-sm shadow-lg">
      <CardContent className="p-4 space-y-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center space-x-2 cursor-help">
              <Server className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Local Compute</span>
              <Badge variant="secondary" className="text-xs">
                {totalMemoryGB} GB Total
              </Badge>
              <Badge variant="outline" className="text-xs">
                {activeDevices} Active
              </Badge>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Local Compute Resources</h4>
              <p className="text-sm text-muted-foreground">
                Your available devices for on-device AI processing
              </p>
              <div className="text-sm">
                <p>Total Memory: {totalMemoryGB} GB</p>
                <p>Active Devices: {activeDevices}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className="space-y-2">
          {devices.map((device) => (
            <DeviceCard key={device.deviceName} device={device} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}