"use client";

interface BetaBadgeProps {
  className?: string;
}

export function BetaBadge({ className }: BetaBadgeProps) {
  return (
    <span 
      className={`
        px-2 py-0.5 text-xs font-medium rounded-full
        bg-primary/10 text-primary
        border border-primary/20
        ${className}
      `}
    >
      Beta
    </span>
  );
}