"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface WorkflowSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function WorkflowSearch({ value, onChange }: WorkflowSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search workflows..."
        className="pl-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}