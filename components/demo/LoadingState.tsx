"use client";

import { motion } from "framer-motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Processing Your Images" }: LoadingStateProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4"
      >
        <LoadingSpinner size="lg" className="mx-auto" />
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{message}</h3>
          <p className="text-sm text-muted-foreground">
            Analyzing style and preparing variations...
          </p>
        </div>
      </motion.div>
    </div>
  );
}