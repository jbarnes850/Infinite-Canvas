"use client";

import { useCallback, useEffect, useState } from "react";

interface UseEyeDropperOptions {
  onColorPicked?: (color: string) => void;
}

interface EyeDropperResult {
  sRGBHex: string;
}

export function useEyeDropper({ onColorPicked }: UseEyeDropperOptions = {}) {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(typeof window !== "undefined" && "EyeDropper" in window);
  }, []);

  const pickColor = useCallback(async () => {
    if (!isSupported) return null;

    try {
      // @ts-ignore - EyeDropper API is experimental
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open() as EyeDropperResult;
      
      if (result.sRGBHex) {
        onColorPicked?.(result.sRGBHex);
        return result.sRGBHex;
      }
      return null;
    } catch (e) {
      console.log("Error using EyeDropper:", e);
      return null;
    }
  }, [isSupported, onColorPicked]);

  return {
    pickColor,
    isSupported,
  };
}