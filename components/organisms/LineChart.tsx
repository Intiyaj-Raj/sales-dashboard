'use client';

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

type LineChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  xAxisKey: string;
  color?: string;
  config?: ChartConfig;
  height?: string;
};

export function LineChart({
  data,
  dataKey,
  xAxisKey,
  color = 'hsl(var(--chart-2))',
  config,
  height = '300px',
}: LineChartProps) {
  const chartConfig: ChartConfig = config ?? {
    [dataKey]: { label: dataKey, color },
  };

  return (
    <ChartContainer config={chartConfig} className="w-full" style={{ height }}>
      <RechartsLineChart data={data} margin={{ top: 8, right: 12, bottom: 8, left: 8 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={48} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </RechartsLineChart>
    </ChartContainer>
  );
}
