'use client';

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

type BarChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  xAxisKey: string;
  color?: string;
  config?: ChartConfig;
  height?: string;
};

export function BarChart({
  data,
  dataKey,
  xAxisKey,
  color = 'hsl(var(--chart-1))',
  config,
  height = '300px',
}: BarChartProps) {
  const chartConfig: ChartConfig = config ?? {
    [dataKey]: { label: dataKey, color },
  };

  return (
    <ChartContainer config={chartConfig} className="w-full" style={{ height }}>
      <RechartsBarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={48} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey={dataKey} fill={color} radius={4} />
      </RechartsBarChart>
    </ChartContainer>
  );
}
