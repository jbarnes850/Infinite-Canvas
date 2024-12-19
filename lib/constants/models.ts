import { AIModel } from "../types/models";

export const AI_MODELS: AIModel[] = [
  // Flux Models
  {
    id: "flux-1-schnell",
    name: "FLUX.1 [schnell]",
    type: "Text to Image",
    description: "Fast and efficient text-to-image generation with quick iterations",
    status: "stable",
    capabilities: [
      "Rapid iterations",
      "Low memory footprint",
      "Optimized inference"
    ],
    requirements: {
      minMemoryGB: 8,
      recommendedMemoryGB: 16
    }
  },
  {
    id: "flux-1-dev",
    name: "FLUX.1 [dev]",
    type: "Text to Image",
    description: "Development version with latest improvements and features",
    status: "dev",
    capabilities: [
      "Experimental features",
      "Latest improvements",
      "Advanced controls"
    ],
    requirements: {
      minMemoryGB: 16,
      recommendedMemoryGB: 32
    }
  },
  {
    id: "flux-1-fill",
    name: "FLUX.1 Fill [dev]",
    type: "Image to Image",
    description: "Specialized model for image inpainting and outpainting tasks",
    status: "dev",
    capabilities: [
      "Smart fill",
      "Context awareness",
      "Seamless blending"
    ],
    requirements: {
      minMemoryGB: 16,
      recommendedMemoryGB: 32
    }
  },
  {
    id: "flux-1-canny",
    name: "FLUX.1 Canny [dev]",
    type: "Image to Image",
    description: "Edge-aware image generation and manipulation",
    status: "dev",
    capabilities: [
      "Edge detection",
      "Structure preservation",
      "Controlled generation"
    ],
    requirements: {
      minMemoryGB: 16,
      recommendedMemoryGB: 32
    }
  },
  {
    id: "flux-1-depth",
    name: "FLUX.1 Depth [dev]",
    type: "Image to Image",
    description: "Depth-aware image generation and editing",
    status: "dev",
    capabilities: [
      "Depth perception",
      "3D consistency",
      "Spatial awareness"
    ],
    requirements: {
      minMemoryGB: 16,
      recommendedMemoryGB: 32
    }
  },
  {
    id: "hunyuan-video",
    name: "HunyuanVideo",
    type: "Text to Video",
    description: "Generate high-quality video content from text descriptions",
    status: "beta",
    capabilities: [
      "Text-to-video generation",
      "Smooth motion synthesis",
      "High-quality output"
    ],
    requirements: {
      minMemoryGB: 32,
      recommendedMemoryGB: 64
    }
  },
  // Stable Diffusion Model
  {
    id: "sd-3-5-large",
    name: "Stable Diffusion 3.5 Large",
    type: "Text to Image",
    description: "Latest large-scale Stable Diffusion model with advanced capabilities",
    status: "stable",
    capabilities: [
      "High-quality output",
      "Advanced understanding",
      "Improved composition"
    ],
    requirements: {
      minMemoryGB: 32,
      recommendedMemoryGB: 64
    }
  }
];