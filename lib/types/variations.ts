export interface GeneratedVariation {
  id: string;
  preview: string;
  timestamp?: number;
  settings: {
    styleStrength: number;
    creativity: number;
    direction: string;
  };
}