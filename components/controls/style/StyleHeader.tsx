"use client";

import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function StyleHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">Style & Output</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            Adjust these controls to fine-tune your creative output
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}