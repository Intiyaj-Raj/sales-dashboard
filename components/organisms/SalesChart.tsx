'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BarChart } from '@/components/organisms/BarChart';
import { LineChart } from '@/components/organisms/LineChart';
import { PieChart } from '@/components/organisms/PieChart';
import { ChartTypeToggle } from '@/components/atoms/ChartTypeToggle';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import type { ChartType } from '@/lib/types';

type SalesChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  xAxisKey: string;
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
  title: string;
  subtitle?: string;
  isPie?: boolean;
};

const CHART_TYPES = [
  { value: 'bar', label: 'Bar' },
  { value: 'line', label: 'Line' },
  { value: 'pie', label: 'Pie' },
];

export function SalesChart({
  data,
  dataKey,
  xAxisKey,
  chartType,
  onChartTypeChange,
  title,
  subtitle,
  isPie = false,
}: SalesChartProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <SectionTitle title={title} subtitle={subtitle} />
        <ChartTypeToggle
          types={CHART_TYPES}
          selected={chartType}
          onSelect={(v) => onChartTypeChange(v as ChartType)}
        />
      </CardHeader>
      <CardContent>
        {chartType === 'bar' && (
          <BarChart data={data} dataKey={dataKey} xAxisKey={xAxisKey} />
        )}
        {chartType === 'line' && (
          <LineChart data={data} dataKey={dataKey} xAxisKey={xAxisKey} />
        )}
        {chartType === 'pie' && (
          <PieChart
            data={data}
            dataKey={dataKey}
            nameKey={xAxisKey}
          />
        )}
      </CardContent>
    </Card>
  );
}
