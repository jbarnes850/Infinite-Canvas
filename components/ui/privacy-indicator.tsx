"use client";

import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrivacyIndicatorProps {
  className?: string;
}

export function PrivacyIndicator({ className }: PrivacyIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center text-xs text-muted-foreground", className)}>
      <Shield className="h-3 w-3 mr-1.5" />
      <span>Your images stay on this device • AI processing done locally</span>
    </div>
  );
}