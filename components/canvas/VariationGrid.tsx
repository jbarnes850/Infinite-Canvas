"use client";

import { useState } from "react";
import { GeneratedVariation } from "@/lib/types";
import { VariationItem } from "./VariationItem";

interface VariationGridProps {
  variations: GeneratedVariation[];
  onSelect: (variation: GeneratedVariation) => void;
}

export function VariationGrid({ variations, onSelect }: VariationGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (variation: GeneratedVariation) => {
    setSelected(variation.id);
    onSelect(variation);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {variations.map((variation) => {
        // Ensure unique keys by combining id with timestamp
        const uniqueKey = `${variation.id}-${variation.timestamp || Date.now()}`;
        return (
          <VariationItem
            key={uniqueKey}
            variation={variation}
            isSelected={selected === variation.id}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}