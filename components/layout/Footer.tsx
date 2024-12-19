"use client";

import { Command } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t bg-card/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Command className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Infinite Canvas
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Your Private AI Creative Assistant - Empowering creativity with privacy-first AI technology
          </p>
        </div>
      </div>
    </motion.footer>
  );
}