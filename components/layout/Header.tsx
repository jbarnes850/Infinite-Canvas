"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { MainNav } from "./MainNav";
import { BetaBadge } from "./BetaBadge";
import { KeyboardShortcuts } from "../controls/KeyboardShortcuts";
import { ComputeStatus } from "../hardware/ComputeStatus";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="hover-lift mr-8">
                <div className="flex items-center space-x-2">
                  <Command className="h-6 w-6 text-primary" />
                  <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Infinite Canvas
                  </h1>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Your Private AI Creative Assistant
                </p>
              </Link>
              <BetaBadge className="hidden sm:block" />
            </div>

            {/* Navigation Section */}
            <MainNav />

            {/* Actions Section */}
            <div className="flex items-center space-x-2">
              <KeyboardShortcuts />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </header>
  );
}