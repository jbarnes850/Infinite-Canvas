"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ColorPaletteProps {
  colors: string[];
  onAddColor: (color: string) => void;
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="absolute bottom-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {colors.map((color, index) => (
            <TooltipProvider key={`${color}-${index}`}>
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
          ))}
        </div>
      </div>
    </div>
  );
}