export type ModelStatus = "stable" | "beta" | "dev";
export type ModelType = 
  | "Text to Image" 
  | "Image to Image" 
  | "Style Transfer" 
  | "Inpainting";

export interface AIModel {
  id: string;
  name: string;
  type: ModelType;
  description: string;
  status: ModelStatus;
  capabilities?: string[];
  requirements?: {
    minMemoryGB: number;
    recommendedMemoryGB: number;
  };
}