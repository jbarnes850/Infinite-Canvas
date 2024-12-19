import { GeneratedVariation } from "./types/variations";

const timestamp = Date.now();

export const GENERATED_VARIATIONS: GeneratedVariation[] = [
  {
    id: "var-1",
    preview: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    timestamp: timestamp,
    settings: {
      styleStrength: 80,
      creativity: 40,
      direction: "Professional studio lighting, clean background"
    }
  },
  {
    id: "var-2",
    preview: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    timestamp: timestamp + 1,
    settings: {
      styleStrength: 80,
      creativity: 40,
      direction: "Dramatic lighting with soft shadows"
    }
  },
  {
    id: "var-3",
    preview: "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=800&q=80",
    timestamp: timestamp + 2,
    settings: {
      styleStrength: 80,
      creativity: 40,
      direction: "Lifestyle context with natural lighting"
    }
  },
  {
    id: "var-4",
    preview: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
    timestamp: timestamp + 3,
    settings: {
      styleStrength: 80,
      creativity: 40,
      direction: "Modern minimalist composition"
    }
  }
];

export const MOCK_HISTORY_ITEMS: GeneratedVariation[] = [
  {
    id: "product-1",
    preview: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    timestamp: Date.now() - 1000 * 60 * 5,
    settings: {
      styleStrength: 75,
      creativity: 45,
      direction: "Professional product photography on white background"
    }
  },
  {
    id: "product-2",
    preview: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    timestamp: Date.now() - 1000 * 60 * 15,
    settings: {
      styleStrength: 85,
      creativity: 60,
      direction: "Lifestyle product shot with natural lighting"
    }
  },
  {
    id: "product-3",
    preview: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    timestamp: Date.now() - 1000 * 60 * 30,
    settings: {
      styleStrength: 65,
      creativity: 35,
      direction: "Modern minimalist product photography"
    }
  }
];