"use client";

interface OnboardingProgressProps {
  steps: number;
  currentStep: number;
}

export function OnboardingProgress({ steps, currentStep }: OnboardingProgressProps) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: steps }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-8 rounded-full transition-colors ${
            i === currentStep ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}