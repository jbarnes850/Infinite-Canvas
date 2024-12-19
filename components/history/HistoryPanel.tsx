"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { HistoryItem } from "./HistoryItem";
import { useHistory } from "@/lib/hooks/useHistory";

export function HistoryPanel() {
  const { historyItems } = useHistory();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">History</h3>
        <span className="text-xs text-muted-foreground">
          {historyItems.length} items
        </span>
      </div>
      <ScrollArea className="h-[240px]">
        <div className="grid grid-cols-2 gap-2 pr-4">
          {historyItems.map((item) => (
            <HistoryItem key={item.id} item={item} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}