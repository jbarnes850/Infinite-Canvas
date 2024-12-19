"use client";

import { Image as ImageIcon, History, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <div className="w-16 border-r bg-card flex flex-col items-center py-4 space-y-4">
      <Button variant="ghost" size="icon" className="rounded-lg">
        <ImageIcon className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-lg">
        <History className="h-5 w-5" />
      </Button>
      <Separator className="my-2" />
      <Button variant="ghost" size="icon" className="rounded-lg mt-auto">
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  );
}