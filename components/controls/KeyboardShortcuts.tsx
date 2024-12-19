"use client";

import { Command } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SHORTCUTS = [
  { key: "⌘ + G", description: "Generate new concepts" },
  { key: "⌘ + E", description: "Export selected" },
  { key: "⌘ + Z", description: "Undo last action" },
  { key: "Space", description: "Toggle zoom mode" },
  { key: "⌘ + +", description: "Zoom in" },
  { key: "⌘ + -", description: "Zoom out" },
  { key: "⌘ + 0", description: "Reset zoom" },
  { key: "G", description: "Toggle grid" },
  { key: "I", description: "Pick color" },
] as const;

export function KeyboardShortcuts() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Command className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {SHORTCUTS.map(({ key, description }) => (
            <div key={key} className="flex items-center justify-between">
              <code className="px-2 py-1 bg-muted rounded text-sm font-mono">
                {key}
              </code>
              <span className="text-sm text-muted-foreground">{description}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}