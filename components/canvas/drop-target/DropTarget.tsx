"use client";

import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DropTargetContent } from "./DropTargetContent";
import { DropTargetOverlay } from "./DropTargetOverlay";

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
      // Create and trigger a file input if no custom browse handler
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
      <DropTargetOverlay isDragging={isDragging} />
      <DropTargetContent isDragging={isDragging} />
    </Card>
  );
}