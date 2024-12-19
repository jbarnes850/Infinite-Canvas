"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MoodBoardProps {
  onImagesAdded: (files: File[]) => void;
}

export function MoodBoard({ onImagesAdded }: MoodBoardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length) {
      onImagesAdded(files);
      // Preview images
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-sm font-medium">Reference Images</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <Card key={index} className="aspect-square relative group overflow-hidden">
            <img src={src} alt="Reference" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>
        ))}
        
        <Card
          className={cn(
            "aspect-square border-2 border-dashed flex items-center justify-center cursor-pointer",
            "hover:border-primary hover:bg-primary/5 transition-colors",
            isDragging && "border-primary bg-primary/5"
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <div className="text-center space-y-2">
            {isDragging ? (
              <Upload className="h-8 w-8 mx-auto text-primary" />
            ) : (
              <Plus className="h-8 w-8 mx-auto text-muted-foreground" />
            )}
            <p className="text-sm text-muted-foreground">
              Drop images or click to browse
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}