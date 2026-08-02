'use client';

import { DollarSign, TrendingUp, ShoppingCart, Package } from 'lucide-react';
import { StatCard } from '@/components/atoms/StatCard';
import { formatCurrency, formatNumber } from '@/lib/mock-data';
import type { YearlySalesData } from '@/lib/types';

type DashboardStatsProps = {
  data: YearlySalesData;
};

export function DashboardStats({ data }: DashboardStatsProps) {
  const profitMargin = ((data.totalProfit / data.totalSales) * 100).toFixed(1);
  const avgOrderValue = Math.round(data.totalSales / data.totalOrders);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Sales"
        value={formatCurrency(data.totalSales)}
        change={`Year ${data.year}`}
        trend="up"
        icon={<DollarSign className="h-4 w-4" />}
      />
      <StatCard
        label="Total Profit"
        value={formatCurrency(data.totalProfit)}
        change={`${profitMargin}% margin`}
        trend="up"
        icon={<TrendingUp className="h-4 w-4" />}
      />
      <StatCard
        label="Total Orders"
        value={formatNumber(data.totalOrders)}
        change={`${formatCurrency(avgOrderValue)} avg order`}
        trend="neutral"
        icon={<ShoppingCart className="h-4 w-4" />}
      />
      <StatCard
        label="Top Products"
        value={formatNumber(data.topProducts.length)}
        change="tracked items"
        trend="neutral"
        icon={<Package className="h-4 w-4" />}
      />
    </div>
  );
}
