"use client";

import { useState, useCallback } from "react";

interface UseZoomOptions {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
}

export function useZoom({
  min = 25,
  max = 200,
  step = 25,
  initial = 100,
}: UseZoomOptions = {}) {
  const [zoom, setZoom] = useState(initial);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(max, prev + step));
  }, [max, step]);

  const zoomOut = useCallback(() => {
    setZoom((prev) => Math.max(min, prev - step));
  }, [min, step]);

  const resetZoom = useCallback(() => {
    setZoom(initial);
  }, [initial]);

  return {
    zoom,
    zoomIn,
    zoomOut,
    resetZoom,
  };
}