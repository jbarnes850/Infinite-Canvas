"use client";

import { useState, useEffect } from "react";
import { MOCK_HISTORY_ITEMS } from "@/lib/mock-data";
import { GeneratedVariation } from "@/lib/types";

export function useHistory() {
  const [historyItems, setHistoryItems] = useState<GeneratedVariation[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setHistoryItems(MOCK_HISTORY_ITEMS);
  }, []);

  return {
    historyItems,
  };
}