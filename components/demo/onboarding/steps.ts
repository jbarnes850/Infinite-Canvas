import { Upload, Wand2, Download } from "lucide-react";

export const onboardingSteps = [
  {
    title: "Welcome to Infinite Canvas",
    description: "Let's train your custom AI model",
    icon: Wand2,
    target: "body"
  },
  {
    title: "Upload Your Dataset",
    description: "Add 10-20 high-quality training images",
    icon: Upload,
    target: ".drop-target"
  },
  {
    title: "Fine-tune the Model",
    description: "Customize training parameters and start the process",
    icon: Wand2,
    target: ".style-controls"
  },
  {
    title: "Generate & Export",
    description: "Create variations with your trained model",
    icon: Download,
    target: ".action-buttons"
  }
] as const;