"use client";

import { useCallback } from "react";
import { EyeDropper, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function ColorPalette({ colors, onAddColor }: ColorPaletteProps) {
  const handleEyeDropper = useCallback(async () => {
    try {
      // @ts-ignore - EyeDropper API is experimental
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      onAddColor(result.sRGBHex);
    } catch (e) {
      console.log("EyeDropper not supported");
    }
  }, [onAddColor]);

  return (
    <div className="absolute bottom-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {colors.map((color, index) => (
            <TooltipProvider key={index}>
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={handleEyeDropper}
              >
                <EyeDropper className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Pick color from canvas</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}