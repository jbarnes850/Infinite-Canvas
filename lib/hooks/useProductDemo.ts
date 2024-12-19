"use client";

import { useState, useCallback } from 'react';
import { GENERATED_VARIATIONS } from '../mock-data';
import { GeneratedVariation } from '../types';

export function useProductDemo() {
  const [variations, setVariations] = useState<GeneratedVariation[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateVariations = useCallback(async () => {
    setIsGenerating(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Add variations one by one for a more realistic feel
    for (const variation of GENERATED_VARIATIONS) {
      setVariations(prev => [...prev, variation]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setIsGenerating(false);
  }, []);

  return {
    variations,
    isGenerating,
    generateVariations
  };
}