"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkflowCardProps {
  workflow: {
    id: string;
    title: string;
    description: string;
    image: string;
    model: string;
  };
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  const router = useRouter();

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(`/playground?workflow=${workflow.id}`)}
    >
      <div className="aspect-video relative">
        <img 
          src={workflow.image} 
          alt={workflow.title}
          className="object-cover w-full h-full"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-black/50 text-white"
        >
          {workflow.model}
        </Badge>
      </div>
      <div className="p-6 space-y-2">
        <h3 className="font-semibold">{workflow.title}</h3>
        <p className="text-sm text-muted-foreground">
          {workflow.description}
        </p>
      </div>
    </Card>
  );
}