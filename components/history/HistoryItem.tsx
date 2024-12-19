"use client";

import { formatDistanceToNow } from "date-fns";
import { Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GeneratedVariation } from "@/lib/types";

interface HistoryItemProps {
  item: GeneratedVariation;
}

export function HistoryItem({ item }: HistoryItemProps) {
  const timeAgo = formatDistanceToNow(item.timestamp);
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="aspect-square relative group cursor-pointer overflow-hidden transition-all hover:ring-2 hover:ring-primary">
            {item.preview ? (
              <img
                src={item.preview}
                alt={`Generated concept from ${timeAgo} ago`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <ImageIcon className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <p className="text-xs text-white">
                {timeAgo} ago
              </p>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{item.settings.direction}</p>
          <p className="text-xs text-muted-foreground">
            Style: {item.settings.styleStrength}% • Creativity: {item.settings.creativity}%
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}