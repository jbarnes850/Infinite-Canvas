"use client";

import { Check } from "lucide-react";

interface ModelCapabilitiesProps {
  capabilities?: string[];
}

export function ModelCapabilities({ capabilities }: ModelCapabilitiesProps) {
  if (!capabilities?.length) return null;

  return (
    <div className="space-y-1">
      {capabilities.map((capability) => (
        <div key={capability} className="flex items-center text-sm">
          <Check className="h-4 w-4 mr-2 text-primary" />
          <span>{capability}</span>
        </div>
      ))}
    </div>
  );
}