"use client";

import { LucideIcon } from "lucide-react";

interface OnboardingStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function OnboardingStep({ title, description, icon: Icon }: OnboardingStepProps) {
  return (
    <div className="flex items-center space-x-4">
      <Icon className="h-8 w-8 text-primary" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}