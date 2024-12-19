"use client";

import { useState } from "react";
import { VariationGrid } from "./VariationGrid";
import { DropTarget } from "./DropTarget";
import { ColorPalette } from "./color-picker";
import { CanvasToolbar } from "./toolbar";
import { CanvasSection } from "./layout/CanvasSection";
import { CanvasContainer } from "./layout/CanvasContainer";
import { CanvasHeader } from "./layout/CanvasHeader";
import { useProductDemo } from "@/lib/hooks/useProductDemo";

export function DropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const { variations, isGenerating, generateVariations } = useProductDemo();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type.startsWith('image/')
    );
    
    if (files.length) {
      await generateVariations();
    }
  };

  const handleHistorySelect = async () => {
    await generateVariations();
  };

  return (
    <CanvasSection>
      <CanvasContainer>
        <CanvasHeader 
          title="Upload Your Dataset"
          subtitle="Drop training images or select from history"
        />
        
        <div className="w-full aspect-[16/10] relative">
          {variations.length > 0 ? (
            <VariationGrid
              variations={variations}
              onSelect={(variation) => console.log("Selected variation:", variation)}
            />
          ) : (
            <DropTarget
              isDragging={isDragging}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onBrowse={handleHistorySelect}
            />
          )}
        </div>

        <ColorPalette colors={colors} onAddColor={(color) => setColors([...colors, color])} />
        <CanvasToolbar />
      </CanvasContainer>
    </CanvasSection>
  );
}