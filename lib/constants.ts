import { AIModel, BrandPreset } from "./types";

export const AI_MODELS: AIModel[] = [
  {
    id: "flux-1-schnell",
    name: "FLUX.1 [schnell]",
    type: "Text to Image",
    description: "Fast and efficient text-to-image generation",
    status: "stable"
  },
  // ... other AI models ...
];

export const DEFAULT_PRESETS: BrandPreset[] = [
  {
    id: "modern",
    name: "Acme Co. Modern",
    description: "Clean, minimalist design with modern tech aesthetic",
    colors: ["#000000", "#4F46E5"],
    styleStrength: 60,
    creativity: 40,
    direction: "Clean, minimalist layout with bold typography; modern tech aesthetic"
  },
  {
    id: "luxury",
    name: "Premium Luxe",
    description: "Sophisticated and premium visual style",
    colors: ["#1F1F1F", "#C4B000"],
    styleStrength: 75,
    creativity: 35,
    direction: "Sophisticated and premium with elegant details"
  },
  {
    id: "playful",
    name: "Vibrant Play",
    description: "Energetic and bold design language",
    colors: ["#FF3366", "#33CC99"],
    styleStrength: 85,
    creativity: 70,
    direction: "Energetic and playful with bold colors"
  },
  {
    id: "minimal",
    name: "Pure Minimal",
    description: "Ultra-clean and understated aesthetic",
    colors: ["#FFFFFF", "#333333"],
    styleStrength: 40,
    creativity: 30,
    direction: "Ultra-minimal with focus on whitespace and typography"
  }
];