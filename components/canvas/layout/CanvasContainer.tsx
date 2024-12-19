"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CanvasContainerProps {
  children: ReactNode;
  className?: string;
}

export function CanvasContainer({ children, className }: CanvasContainerProps) {
  return (
    <div className={cn(
      "w-full max-w-7xl mx-auto px-6 py-8",
      "flex flex-col items-center",
      className
    )}>
      {children}
    </div>
  );
}