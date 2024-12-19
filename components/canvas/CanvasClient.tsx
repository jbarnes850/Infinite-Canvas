"use client";

import { DropZone } from "@/components/canvas/DropZone";
import { ControlPanel } from "@/components/controls/ControlPanel";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";

interface CanvasClientProps {
  workflowId: string;
}

export function CanvasClient({ workflowId }: CanvasClientProps) {
  return (
    <div className="flex flex-col h-screen">
      <WorkspaceHeader workflowId={workflowId} />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <DropZone />
        </div>
        <div className="w-[320px] border-l bg-card/50 backdrop-blur-sm overflow-y-auto">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}