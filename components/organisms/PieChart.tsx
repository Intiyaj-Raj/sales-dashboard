'use client';

import { Cell, Pie, PieChart as RechartsPieChart } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart';

const PIE_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

type PieChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  nameKey: string;
  config?: ChartConfig;
  height?: string;
};

export function PieChart({
  data,
  dataKey,
  nameKey,
  config,
  height = '300px',
}: PieChartProps) {
  const chartConfig: ChartConfig = config ?? {};

  return (
    <ChartContainer config={chartConfig} className="w-full" style={{ height }}>
      <RechartsPieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey={nameKey} />} />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={50}
          outerRadius={90}
          paddingAngle={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
          ))}
        </Pie>
        <ChartLegend content={<ChartLegendContent nameKey={nameKey} />} />
      </RechartsPieChart>
    </ChartContainer>
  );
}
