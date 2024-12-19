"use client";

import { motion, AnimatePresence } from "framer-motion";

interface DropTargetOverlayProps {
  isDragging: boolean;
}

export function DropTargetOverlay({ isDragging }: DropTargetOverlayProps) {
  return (
    <AnimatePresence>
      {isDragging && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-primary/5 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, hsl(var(--primary)/0.1) 0%, transparent 70%),
              linear-gradient(to bottom, hsl(var(--primary)/0.05), transparent)
            `
          }}
        />
      )}
    </AnimatePresence>
  );
}