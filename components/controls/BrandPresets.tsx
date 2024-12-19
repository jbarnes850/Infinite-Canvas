"use client";

import { Check } from "lucide-react";
import { BrandPreset } from "@/lib/types";
import { DEFAULT_PRESETS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrandPresetsProps {
  selected: BrandPreset | null;
  onSelect: (preset: BrandPreset) => void;
}

export function BrandPresets({ selected, onSelect }: BrandPresetsProps) {
  return (
    <Select
      value={selected?.id}
      onValueChange={(id) => {
        const preset = DEFAULT_PRESETS.find(p => p.id === id);
        if (preset) onSelect(preset);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose a style preset" />
      </SelectTrigger>
      <SelectContent>
        {DEFAULT_PRESETS.map((preset) => (
          <SelectItem key={preset.id} value={preset.id}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {preset.colors.map((color) => (
                    <div
                      key={color}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>{preset.name}</span>
              </div>
              {selected?.id === preset.id && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}