"use client";

import { useState, useEffect } from "react";
import { BrandPreset, AIModel } from "@/lib/types";
import { DEFAULT_PRESETS } from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { StyleHeader } from "./style/StyleHeader";
import { StyleSlider } from "./style/StyleSlider";
import { ModelSelector } from "./model-selector/ModelSelector";
import { PresetSelector } from "./presets";

export function StyleControls() {
  const [styleStrength, setStyleStrength] = useState([50]);
  const [creativity, setCreativity] = useState([30]);
  const [direction, setDirection] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<BrandPreset | null>(null);
  const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);

  useEffect(() => {
    if (DEFAULT_PRESETS.length > 0 && !selectedPreset) {
      handlePresetSelect(DEFAULT_PRESETS[0]);
    }
  }, [selectedPreset]);

  const handlePresetSelect = (preset: BrandPreset) => {
    setSelectedPreset(preset);
    setStyleStrength([preset.styleStrength]);
    setCreativity([preset.creativity]);
    setDirection(preset.direction);
  };

  const handleModelSelect = (model: AIModel) => {
    setSelectedModel(model);
  };

  const getStyleStrengthDescription = (value: number) => 
    value < 30 ? "Subtle refinements" : 
    value < 70 ? "Balanced adjustments" : 
    "Bold transformations";

  const getCreativityDescription = (value: number) =>
    value < 30 ? "Conservative" : 
    value < 70 ? "Balanced" : 
    "Experimental";

  return (
    <div className="space-y-6">
      <StyleHeader />
      
      <ModelSelector onSelect={handleModelSelect} />
      
      <Separator />

      <PresetSelector
        selected={selectedPreset}
        onSelect={handlePresetSelect}
      />

      <StyleSlider
        label="Brand Alignment"
        tooltip="Adjust how closely we follow your brand's look"
        value={styleStrength}
        onChange={setStyleStrength}
        description={getStyleStrengthDescription}
      />

      <StyleSlider
        label="Idea Variety"
        tooltip="Wider variety produces more exploratory concepts"
        value={creativity}
        onChange={setCreativity}
        description={getCreativityDescription}
      />

      <div className="space-y-2">
        <label className="text-sm font-medium">Creative Direction</label>
        <Textarea
          placeholder="Describe your desired style (e.g., 'Minimalist, soft pastel tones')"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="resize-none h-20"
        />
      </div>
    </div>
  );
}