"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Share2, Settings, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { FEATURED_WORKFLOWS } from "@/lib/constants/workflows";

interface WorkspaceHeaderProps {
  workflowId?: string;
}

export function WorkspaceHeader({ workflowId }: WorkspaceHeaderProps) {
  const router = useRouter();
  const [projectName, setProjectName] = useState(() => {
    if (workflowId === "scratch") return "Untitled Project";
    const workflow = FEATURED_WORKFLOWS.find(w => w.id === workflowId);
    return workflow ? workflow.title : "Untitled Project";
  });
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => router.push("/")}
            className="mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="text-lg font-medium bg-transparent border-none hover:bg-accent/50 focus:bg-accent w-[300px]"
          />
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center text-sm text-muted-foreground">
                <Save className={`h-4 w-4 mr-1 ${isSaving ? "animate-pulse" : ""}`} />
                {isSaving ? "Saving..." : "All changes saved"}
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                Your work is automatically saved locally on your device
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
}