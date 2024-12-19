"use client";

interface CanvasHeaderProps {
  title: string;
  subtitle: string;
}

export function CanvasHeader({ title, subtitle }: CanvasHeaderProps) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}