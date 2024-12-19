"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ColorSwatchProps {
  color: string;
}

export function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="w-6 h-6 rounded-full cursor-pointer ring-2 ring-white hover:ring-primary transition-all"
            style={{ backgroundColor: color }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{color}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}