"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingControlsProps {
  onSkip: () => void;
  onNext: () => void;
  isLastStep: boolean;
}

export function OnboardingControls({ onSkip, onNext, isLastStep }: OnboardingControlsProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" onClick={onSkip}>
        Skip
      </Button>
      <Button onClick={onNext}>
        {isLastStep ? "Get Started" : "Next"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}