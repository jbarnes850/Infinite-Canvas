"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu } from "lucide-react";

interface TrainingOverlayProps {
  progress: number;
  step: number;
  totalSteps: number;
  currentLoss: number;
  timeRemaining: string;
  deviceUtilization: {
    deviceId: string;
    utilization: number;
  }[];
}

export function TrainingOverlay({
  progress,
  step,
  totalSteps,
  currentLoss,
  timeRemaining,
  deviceUtilization
}: TrainingOverlayProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <Card className="w-full max-w-lg p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Training in Progress</h2>
            <p className="text-sm text-muted-foreground">
              Your model is being fine-tuned on the local compute cluster
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Step {step}/{totalSteps}</span>
                <span>{timeRemaining} remaining</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-sm font-medium">Current Loss</span>
                <p className="text-2xl font-bold">{currentLoss.toFixed(3)}</p>
                <p className="text-xs text-muted-foreground">
                  ↓ {(currentLoss * 0.005).toFixed(3)} from last step
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-medium">Learning Rate</span>
                <p className="text-2xl font-bold">2.5e-5</p>
                <p className="text-xs text-muted-foreground">
                  Using cosine schedule
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Device Utilization</h3>
              <div className="space-y-2">
                {deviceUtilization.map(({ deviceId, utilization }) => (
                  <div key={deviceId} className="flex items-center space-x-3">
                    <Cpu className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{deviceId}</span>
                        <Badge variant="secondary">{Math.round(utilization)}%</Badge>
                      </div>
                      <Progress value={utilization} className="h-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}