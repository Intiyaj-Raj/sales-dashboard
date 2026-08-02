'use client';

import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
