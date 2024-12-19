"use client";

import { Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StyleSliderProps {
  label: string;
  tooltip: string;
  value: number[];
  onChange: (value: number[]) => void;
  description: (value: number) => string;
}

export function StyleSlider({
  label,
  tooltip,
  value,
  onChange,
  description,
}: StyleSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Slider
        value={value}
        onValueChange={onChange}
        max={100}
        step={1}
        className="py-2"
      />
      <p className="text-xs text-muted-foreground">
        {description(value[0])}
      </p>
    </div>
  );
}