"use client";

import { Info } from "lucide-react";
import { BrandPreset } from "@/lib/types";
import { DEFAULT_PRESETS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PresetItem } from "./PresetItem";

interface PresetSelectorProps {
  selected: BrandPreset | null;
  onSelect: (preset: BrandPreset) => void;
}

export function PresetSelector({ selected, onSelect }: PresetSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Brand Preset</label>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">
              Choose a preset to quickly set up your brand's style and creative direction
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <Select
        value={selected?.id}
        onValueChange={(id) => {
          const preset = DEFAULT_PRESETS.find(p => p.id === id);
          if (preset) onSelect(preset);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a style preset">
            {selected && (
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  {selected.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full ring-2 ring-background"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>{selected.name}</span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {DEFAULT_PRESETS.map((preset) => (
            <PresetItem
              key={preset.id}
              preset={preset}
              isSelected={selected?.id === preset.id}
            />
          ))}
        </SelectContent>
      </Select>

      {selected && (
        <p className="text-xs text-muted-foreground">
          {selected.description}
        </p>
      )}
    </div>
  );
}