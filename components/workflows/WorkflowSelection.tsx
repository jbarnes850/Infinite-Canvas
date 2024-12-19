"use client";

import { useState } from "react";
import { WorkflowGrid } from "./WorkflowGrid";
import { WorkflowSearch } from "./WorkflowSearch";
import { WorkflowHeader } from "./WorkflowHeader";

export function WorkflowSelection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto py-8 space-y-6">
      <WorkflowHeader />
      <WorkflowSearch value={searchQuery} onChange={setSearchQuery} />
      <WorkflowGrid searchQuery={searchQuery} />
    </div>
  );
}