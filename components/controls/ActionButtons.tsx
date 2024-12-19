"use client";

import { Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTrainingDemo } from "@/lib/hooks/useTrainingDemo";
import { AIModel } from "@/lib/types/models";

interface ActionButtonsProps {
  selectedModel: AIModel;
}

export function ActionButtons({ selectedModel }: ActionButtonsProps) {
  const { trainingState, startTraining } = useTrainingDemo();

  return (
    <div className="space-y-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              className="w-full btn-gradient" 
              size="lg"
              onClick={() => startTraining(selectedModel)}
              disabled={trainingState.isTraining}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {trainingState.isTraining ? "Training..." : "Start Training"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Start model training on your local compute cluster
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent" 
              size="lg"
              disabled={trainingState.isTraining}
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Save your trained model and generated assets
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}