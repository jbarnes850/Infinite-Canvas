"use client";

import { useState } from "react";
import { WorkflowGrid } from "@/components/workflows/WorkflowGrid";
import { WorkflowSearch } from "@/components/workflows/WorkflowSearch";
import { WorkflowHeader } from "@/components/workflows/WorkflowHeader";

export default function WorkflowsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl space-y-8">
        <WorkflowHeader />
        <WorkflowSearch value={searchQuery} onChange={setSearchQuery} />
        <WorkflowGrid searchQuery={searchQuery} />
      </div>
    </div>
  );
}