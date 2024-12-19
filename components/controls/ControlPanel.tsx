"use client";

import { StyleControls } from "./style/StyleControls";
import { ActionButtons } from "./ActionButtons";
import { HistoryPanel } from "../history/HistoryPanel";
import { Separator } from "@/components/ui/separator";
import { PrivacyIndicator } from "../ui/privacy-indicator";

export function ControlPanel() {
  return (
    <div className="p-6 space-y-6">
      <StyleControls />
      <Separator />
      <ActionButtons />
      <Separator />
      <HistoryPanel />
      <div className="h-4" /> {/* Bottom spacing */}
      <PrivacyIndicator className="mt-auto" />
    </div>
  );
}