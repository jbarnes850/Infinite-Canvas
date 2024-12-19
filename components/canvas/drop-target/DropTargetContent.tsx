"use client";

import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrivacyIndicator } from "@/components/ui/privacy-indicator";

interface DropTargetContentProps {
  isDragging: boolean;
}

export function DropTargetContent({ isDragging }: DropTargetContentProps) {
  return (
    <div className="text-center space-y-6">
      <Upload 
        className={cn(
          "h-16 w-16 mx-auto transition-all duration-300",
          isDragging ? "text-primary scale-110" : "text-muted-foreground"
        )} 
      />
      <div className="space-y-2">
        <h3 className={cn(
          "text-lg font-medium transition-colors",
          isDragging ? "text-primary" : "text-foreground"
        )}>
          {isDragging ? "Release to Add Files" : "Add Your Brand References"}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Drop inspiration images or click to browse your files
        </p>
      </div>
      <PrivacyIndicator />
    </div>
  );
}