"use client";

import { Check } from "lucide-react";
import { BrandPreset } from "@/lib/types";
import { SelectItem } from "@/components/ui/select";

interface PresetItemProps {
  preset: BrandPreset;
  isSelected: boolean;
}

export function PresetItem({ preset, isSelected }: PresetItemProps) {
  return (
    <SelectItem value={preset.id}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-1">
            {preset.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full ring-2 ring-background"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span>{preset.name}</span>
        </div>
        {isSelected && (
          <Check className="h-4 w-4 text-primary" />
        )}
      </div>
    </SelectItem>
  );
}