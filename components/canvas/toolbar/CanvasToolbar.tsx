"use client";

import { useState } from "react";
import { Grid2x2, Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import { ToolbarButton } from "./ToolbarButton";
import { useZoom } from "@/lib/hooks/useZoom";

export function CanvasToolbar() {
  const { zoom, zoomIn, zoomOut, resetZoom } = useZoom();
  const [gridEnabled, setGridEnabled] = useState(false);

  return (
    <div className="absolute top-4 right-4 p-1 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg flex items-center space-x-1">
      <ToolbarButton
        icon={Grid2x2}
        label="Toggle grid"
        onClick={() => setGridEnabled((prev) => !prev)}
      />
      <ToolbarButton icon={ZoomOut} label="Zoom out" onClick={zoomOut} />
      <span className="text-xs font-medium px-2">{zoom}%</span>
      <ToolbarButton icon={ZoomIn} label="Zoom in" onClick={zoomIn} />
      <ToolbarButton
        icon={Maximize2}
        label="Fit to screen"
        onClick={resetZoom}
      />
    </div>
  );
}