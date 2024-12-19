"use client";

import { Cpu } from "lucide-react";
import { HardwareInfo } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface DeviceCardProps {
  device: HardwareInfo;
}

export function DeviceCard({ device }: DeviceCardProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div 
              className="flex items-center space-x-3 p-3 cursor-help"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Cpu className={`h-4 w-4 ${device.isActive ? "text-primary" : "text-muted-foreground"}`} />
                {device.isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{device.deviceName}</span>
                  <Badge variant="secondary" className="text-xs">
                    {device.memoryGB} GB
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {device.architecture}
                </p>
              </div>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p className="font-medium">{device.deviceName}</p>
              <div className="text-sm space-y-1">
                <p>Architecture: {device.architecture}</p>
                <p>Memory: {device.memoryGB} GB Unified Memory</p>
                <p>Status: {device.isActive ? "Active" : "Inactive"}</p>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
}