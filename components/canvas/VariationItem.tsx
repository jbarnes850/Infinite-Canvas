"use client";

import { Image as ImageIcon, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GeneratedVariation } from "@/lib/types";

interface VariationItemProps {
  variation: GeneratedVariation;
  isSelected: boolean;
  onSelect: (variation: GeneratedVariation) => void;
}

export function VariationItem({ variation, isSelected, onSelect }: VariationItemProps) {
  return (
    <Card
      className={cn(
        "aspect-square relative cursor-pointer group transition-all",
        "hover:ring-2 hover:ring-primary",
        isSelected && "ring-2 ring-primary"
      )}
      onClick={() => onSelect(variation)}
    >
      {variation.preview ? (
        <img
          src={variation.preview}
          alt="Generated variation"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
      )}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
          <Check className="h-4 w-4" />
        </div>
      )}
    </Card>
  );
}