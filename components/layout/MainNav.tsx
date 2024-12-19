"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Palette, BarChart2, Layout, Cpu } from "lucide-react";

const navItems = [
  {
    title: "Playground",
    href: "/playground",
    icon: Palette
  },
  {
    title: "Models",
    href: "/models",
    icon: Cpu
  },
  {
    title: "Training Insights",
    href: "/insights",
    icon: BarChart2
  },
  {
    title: "Workflows",
    href: "/workflows",
    icon: Layout
  }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center flex-1 px-8">
      <div className="flex items-center space-x-2">
        {navItems.map(({ title, href, icon: Icon }) => (
          <Link key={href} href={href}>
            <Button
              variant={pathname.startsWith(href) ? "secondary" : "ghost"}
              className="gap-2"
              size="sm"
            >
              <Icon className="h-4 w-4" />
              {title}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}