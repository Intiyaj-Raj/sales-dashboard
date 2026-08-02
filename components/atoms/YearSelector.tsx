'use client';

import { cn } from '@/lib/utils';

type YearSelectorProps = {
  years: number[];
  selectedYear: number;
  onSelect: (year: number) => void;
  className?: string;
};

export function YearSelector({ years, selectedYear, onSelect, className }: YearSelectorProps) {
  return (
    <div className={cn('inline-flex rounded-lg border bg-muted p-1', className)}>
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={cn(
            'rounded-md px-4 py-1.5 text-sm font-medium transition-all',
            selectedYear === year
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
