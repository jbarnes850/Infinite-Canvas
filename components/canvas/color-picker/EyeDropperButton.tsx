"use client";

import { useEffect, useState } from "react";
import { EyeDropper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEyeDropper } from "@/lib/hooks";

interface EyeDropperButtonProps {
  onPickColor: (color: string) => void;
}

export function EyeDropperButton({ onPickColor }: EyeDropperButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { pickColor, isSupported } = useEyeDropper({ onColorPicked: onPickColor });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server or if not supported
  if (!mounted || !isSupported) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={pickColor}
          >
            <EyeDropper className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Pick color from canvas</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}