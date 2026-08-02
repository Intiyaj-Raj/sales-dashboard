'use client';

import { BarChart3 } from 'lucide-react';
import { YearSelector } from '@/components/atoms/YearSelector';
import { ThresholdFilter } from '@/components/molecules/ThresholdFilter';

type DashboardHeaderProps = {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
};

export function DashboardHeader({
  years,
  selectedYear,
  onYearChange,
  threshold,
  onThresholdChange,
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Sales Dashboard</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Annual sales performance overview across product categories and regions
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <ThresholdFilter value={threshold} onChange={onThresholdChange} />
        <YearSelector
          years={years}
          selectedYear={selectedYear}
          onSelect={onYearChange}
        />
      </div>
    </header>
  );
}
