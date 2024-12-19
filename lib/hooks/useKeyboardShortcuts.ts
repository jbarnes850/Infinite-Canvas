"use client";

import { useEffect } from "react";

interface ShortcutHandlers {
  onGenerate?: () => void;
  onExport?: () => void;
  onUndo?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onResetZoom?: () => void;
  onToggleGrid?: () => void;
}

export function useKeyboardShortcuts({
  onGenerate,
  onExport,
  onUndo,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onToggleGrid
}: ShortcutHandlers) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Check if target is an input or textarea
      if (e.target instanceof HTMLElement && 
          (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
        return;
      }

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdKey = isMac ? e.metaKey : e.ctrlKey;

      if (cmdKey && e.key === "g" && onGenerate) {
        e.preventDefault();
        onGenerate();
      }
      else if (cmdKey && e.key === "e" && onExport) {
        e.preventDefault();
        onExport();
      }
      else if (cmdKey && e.key === "z" && onUndo) {
        e.preventDefault();
        onUndo();
      }
      else if (cmdKey && e.key === "+" && onZoomIn) {
        e.preventDefault();
        onZoomIn();
      }
      else if (cmdKey && e.key === "-" && onZoomOut) {
        e.preventDefault();
        onZoomOut();
      }
      else if (cmdKey && e.key === "0" && onResetZoom) {
        e.preventDefault();
        onResetZoom();
      }
      else if (e.key === "g" && onToggleGrid) {
        e.preventDefault();
        onToggleGrid();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onGenerate, onExport, onUndo, onZoomIn, onZoomOut, onResetZoom, onToggleGrid]);
}