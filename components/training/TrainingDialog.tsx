"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrainingOptions } from "./TrainingOptions";
import { Wand2 } from "lucide-react";

interface TrainingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TrainingDialog({ open, onOpenChange }: TrainingDialogProps) {
  const [selectedOption, setSelectedOption] = useState<"finetune" | "train">("finetune");
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = async () => {
    setIsStarting(true);
    // Simulate training start
    await new Promise(resolve => setTimeout(resolve, 1000));
    onOpenChange(false);
    setIsStarting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Train Your Model</DialogTitle>
          <DialogDescription>
            Choose how you want to train your AI model
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedOption} onValueChange={(v) => setSelectedOption(v as "finetune" | "train")}>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="finetune">Fine-tune Existing Model</TabsTrigger>
            <TabsTrigger value="train">Train from Scratch</TabsTrigger>
          </TabsList>

          <TabsContent value="finetune" className="space-y-4">
            <TrainingOptions type="finetune" />
            <Button 
              className="w-full" 
              size="lg"
              disabled={isStarting}
              onClick={handleStart}
            >
              <Wand2 className="mr-2 h-4 w-4" />
              {isStarting ? "Starting..." : "Start Fine-tuning"}
            </Button>
          </TabsContent>

          <TabsContent value="train" className="space-y-4">
            <TrainingOptions type="train" />
            <Button 
              className="w-full" 
              size="lg"
              disabled={isStarting}
              onClick={handleStart}
            >
              <Wand2 className="mr-2 h-4 w-4" />
              {isStarting ? "Starting..." : "Start Training"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}