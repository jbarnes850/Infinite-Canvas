"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { AIModel } from "@/lib/types/models";
import { AI_MODELS } from "@/lib/constants/models";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { ModelCapabilities } from "./ModelCapabilities";
import { ModelRequirements } from "./ModelRequirements";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModelSelectorProps {
  onSelect: (model: AIModel) => void;
}

export function ModelSelector({ onSelect }: ModelSelectorProps) {
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS[0]);

  const handleSelect = (modelId: string) => {
    const model = AI_MODELS.find((m) => m.id === modelId);
    if (model) {
      setSelectedModel(model);
      onSelect(model);
    }
  };

  const getStatusColor = (status: AIModel["status"]) => {
    switch (status) {
      case "stable":
        return "bg-green-500/10 text-green-500";
      case "dev":
        return "bg-yellow-500/10 text-yellow-500";
      case "beta":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const modelsByType = AI_MODELS.reduce((acc, model) => {
    acc[model.type] = [...(acc[model.type] || []), model];
    return acc;
  }, {} as Record<string, AIModel[]>);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">AI Model</label>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Info className="h-4 w-4 text-muted-foreground cursor-help" />
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">
              Choose the AI model that best suits your needs. Each model has different capabilities and performance characteristics.
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <Select
        value={selectedModel.id}
        onValueChange={handleSelect}
      >
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center justify-between">
              <span>{selectedModel.name}</span>
              <Badge variant="secondary" className={getStatusColor(selectedModel.status)}>
                {selectedModel.status}
              </Badge>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <ScrollArea className="h-[300px]">
            {Object.entries(modelsByType).map(([type, models]) => (
              <SelectGroup key={type}>
                <SelectLabel className="text-xs uppercase tracking-wider text-muted-foreground px-2 py-1.5">
                  {type}
                </SelectLabel>
                {models.map((model) => (
                  <SelectItem key={model.id} value={model.id} className="py-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{model.name}</span>
                        <Badge variant="secondary" className={getStatusColor(model.status)}>
                          {model.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {model.description}
                      </p>
                      <ModelCapabilities capabilities={model.capabilities} />
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>

      {selectedModel && <ModelRequirements model={selectedModel} />}

      <p className="text-xs text-muted-foreground">
        {selectedModel.description}
      </p>
    </div>
  );
}