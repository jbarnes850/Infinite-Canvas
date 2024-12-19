"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { WorkflowCard } from "./WorkflowCard";
import { FEATURED_WORKFLOWS } from "@/lib/constants/workflows";

interface WorkflowGridProps {
  searchQuery: string;
}

export function WorkflowGrid({ searchQuery }: WorkflowGridProps) {
  const router = useRouter();
  const filteredWorkflows = FEATURED_WORKFLOWS.filter(
    workflow => 
      workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        className="p-6 hover:shadow-lg transition-shadow cursor-pointer hover-lift"
        onClick={() => router.push("/canvas/scratch")}
      >
        <div className="space-y-4">
          <div className="h-40 bg-primary/5 rounded-lg flex items-center justify-center">
            <span className="text-5xl">+</span>
          </div>
          <div>
            <h3 className="font-semibold">Start from Scratch</h3>
            <p className="text-sm text-muted-foreground">
              Create a custom workflow with full control
            </p>
          </div>
        </div>
      </Card>

      {filteredWorkflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
}