"use client";

import { useState } from "react";
import { DropZone } from "@/components/canvas/DropZone";
import { ControlPanel } from "@/components/controls/ControlPanel";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";
import { OnboardingOverlay } from "@/components/demo/OnboardingOverlay";
import { LoadingState } from "@/components/demo/LoadingState";
import { ErrorBoundary } from "@/components/demo/ErrorBoundary";
import { TrainingOverlay } from "@/components/training/TrainingOverlay";
import { useTrainingDemo } from "@/lib/hooks/useTrainingDemo";

export default function PlaygroundPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOnboarding] = useState(() => true);
  const { trainingState } = useTrainingDemo();

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-[calc(100vh-4rem)]">
        <WorkspaceHeader />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto relative">
            <div className="container mx-auto px-6 py-8 max-w-7xl">
              <DropZone />
            </div>
          </div>
          <div className="w-[320px] border-l bg-card/50 backdrop-blur-sm overflow-y-auto">
            <ControlPanel />
          </div>
        </div>
        {showOnboarding && <OnboardingOverlay />}
        {trainingState.isTraining && (
          <TrainingOverlay {...trainingState} />
        )}
      </div>
    </ErrorBoundary>
  );
}