"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DistributedTrainingDemo() {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsActive(true);
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute inset-0 brand-pattern opacity-5" />
      
      <div className="relative space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium">Distributed Training Visualization</h3>
          <p className="text-sm text-muted-foreground">
            Watch how your devices work together to train your custom AI model
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Device 1 - Mac Studio */}
          <div className="space-y-4">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="aspect-square rounded-lg bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative"
            >
              <div className="text-center">
                <h4 className="font-medium">Mac Studio</h4>
                <p className="text-sm text-muted-foreground">Primary Device</p>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="absolute inset-0 border-2 border-primary rounded-lg"
                    style={{ animation: "pulse 2s infinite" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
            <Progress value={progress} className="h-1" />
          </div>

          {/* Connection Lines */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50"
            />
          </div>

          {/* Device 2 - MacBook Pro */}
          <div className="space-y-4">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="aspect-square rounded-lg bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative"
            >
              <div className="text-center">
                <h4 className="font-medium">MacBook Pro</h4>
                <p className="text-sm text-muted-foreground">Secondary Device</p>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="absolute inset-0 border-2 border-primary rounded-lg"
                    style={{ animation: "pulse 2s infinite" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
            <Progress value={progress * 0.8} className="h-1" />
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Training progress is synchronized across all devices in real-time</p>
          <p className="text-xs mt-1">Using MLX distributed communication</p>
        </div>
      </div>
    </Card>
  );
}