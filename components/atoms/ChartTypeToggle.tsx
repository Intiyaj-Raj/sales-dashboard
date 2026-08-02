'use client';

import { cn } from '@/lib/utils';

type ChartTypeToggleProps = {
  types: { value: string; label: string }[];
  selected: string;
  onSelect: (value: string) => void;
  className?: string;
};

export function ChartTypeToggle({ types, selected, onSelect, className }: ChartTypeToggleProps) {
  return (
    <div className={cn('inline-flex gap-1 rounded-lg border bg-muted p-1', className)}>
      {types.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelect(type.value)}
          className={cn(
            'rounded-md px-3 py-1.5 text-xs font-medium transition-all',
            selected === type.value
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
