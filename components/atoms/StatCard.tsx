'use client';

import { cn } from '@/lib/utils';

type StatCardProps = {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
};

export function StatCard({ label, value, change, trend = 'neutral', icon, className }: StatCardProps) {
  const trendColor =
    trend === 'up'
      ? 'text-emerald-600'
      : trend === 'down'
        ? 'text-red-500'
        : 'text-muted-foreground';

  return (
    <div
      className={cn(
        'rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
      {change && (
        <p className={cn('mt-1 text-xs font-medium', trendColor)}>
          {change}
        </p>
      )}
    </div>
  );
}
