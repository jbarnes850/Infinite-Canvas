"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CanvasSectionProps {
  children: ReactNode;
  className?: string;
}

export function CanvasSection({ children, className }: CanvasSectionProps) {
  return (
    <section className={cn(
      "flex-1 flex flex-col items-center justify-center min-h-0",
      className
    )}>
      {children}
    </section>
  );
}