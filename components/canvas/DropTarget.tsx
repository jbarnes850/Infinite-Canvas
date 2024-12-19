"use client";

import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { PrivacyIndicator } from "@/components/ui/privacy-indicator";

interface DropTargetProps {
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onBrowse?: () => void;
}

export function DropTarget({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onBrowse
}: DropTargetProps) {
  const handleClick = useCallback(() => {
    if (onBrowse) {
      onBrowse();
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = 'image/*';
      input.onchange = (e) => {
        const files = (e.target as HTMLInputElement).files;
        if (files?.length) {
          const dataTransfer = new DataTransfer();
          Array.from(files).forEach(file => dataTransfer.items.add(file));
          const dropEvent = new DragEvent('drop', { dataTransfer });
          onDrop(dropEvent);
        }
      };
      input.click();
    }
  }, [onBrowse, onDrop]);

  return (
    <Card
      className={cn(
        "w-full h-full relative overflow-hidden",
        "flex items-center justify-center",
        "border-2 border-dashed transition-all duration-300",
        "hover:border-primary/50 hover:bg-primary/5",
        isDragging ? "border-primary scale-[0.99] bg-primary/5" : "border-muted",
        "cursor-pointer"
      )}
      onClick={handleClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
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
            {isDragging ? "Release to Add Files" : "Upload Training Dataset"}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Drop image files or click to browse your training dataset
          </p>
          <p className="text-xs text-muted-foreground">
            Recommended: 10-20 high-quality images for best results
          </p>
        </div>
        <PrivacyIndicator />
      </div>
    </Card>
  );
}