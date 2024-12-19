"use client";

import { useState } from "react";
import { Cpu, ChevronUp, ChevronDown } from "lucide-react";
import { useHardwareInfo } from "@/lib/hooks/useHardwareInfo";
import { DeviceCard } from "./DeviceCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ComputeStatus() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { devices, totalMemoryGB, activeDevices } = useHardwareInfo();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Card className={cn(
        "bg-card/80 backdrop-blur-sm shadow-lg transition-all duration-300",
        "border border-border/50",
        isExpanded ? "w-80" : "w-auto"
      )}>
        <Button
          variant="ghost"
          className="w-full flex items-center justify-between p-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="font-medium">Local Compute</span>
            <Badge variant="secondary" className="ml-2">
              {activeDevices}/{devices.length} Active
            </Badge>
          </div>
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp className="h-4 w-4" />
          </motion.div>
        </Button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 space-y-3">
                <div className="text-sm text-muted-foreground">
                  Total Memory: {totalMemoryGB} GB
                </div>
                <div className="space-y-2">
                  {devices.map((device) => (
                    <DeviceCard key={device.deviceName} device={device} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}