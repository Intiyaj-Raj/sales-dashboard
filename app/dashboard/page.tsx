"use client";

import { useState, useMemo } from "react";
import { DashboardHeader } from "@/components/molecules/DashboardHeader";
import { DashboardStats } from "@/components/molecules/DashboardStats";
import { SalesChart } from "@/components/organisms/SalesChart";
import { TopProductsTable } from "@/components/organisms/TopProductsTable";
import { salesData, availableYears } from "@/lib/mock-data";
import type { ChartType } from "@/lib/types";

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [monthlyChartType, setMonthlyChartType] = useState<ChartType>("bar");
  const [categoryChartType, setCategoryChartType] = useState<ChartType>("pie");
  const [regionChartType, setRegionChartType] = useState<ChartType>("bar");

  const yearData = useMemo(() => salesData[selectedYear], [selectedYear]);

  const filteredMonthly = useMemo(
    () => yearData.monthly.filter((m) => m.sales >= threshold),
    [yearData, threshold],
  );
  const filteredCategory = useMemo(
    () => yearData.byCategory.filter((c) => c.sales >= threshold),
    [yearData, threshold],
  );
  const filteredRegion = useMemo(
    () => yearData.byRegion.filter((r) => r.sales >= threshold),
    [yearData, threshold],
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        <DashboardHeader
          years={availableYears}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          threshold={threshold}
          onThresholdChange={setThreshold}
        />

        <DashboardStats data={yearData} />

        <div className="grid gap-6 lg:grid-cols-2">
          <SalesChart
            title="Monthly Sales"
            subtitle={`Sales trend for ${selectedYear}`}
            data={filteredMonthly}
            dataKey="sales"
            xAxisKey="month"
            chartType={monthlyChartType}
            onChartTypeChange={setMonthlyChartType}
          />
          <SalesChart
            title="Sales by Category"
            subtitle="Revenue distribution across product categories"
            data={filteredCategory}
            dataKey="sales"
            xAxisKey="category"
            chartType={categoryChartType}
            onChartTypeChange={setCategoryChartType}
            isPie
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SalesChart
            title="Sales by Region"
            subtitle="Regional performance breakdown"
            data={filteredRegion}
            dataKey="sales"
            xAxisKey="region"
            chartType={regionChartType}
            onChartTypeChange={setRegionChartType}
          />
          <TopProductsTable
            products={yearData.topProducts}
            threshold={threshold}
          />
        </div>

        <footer className="border-t pt-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Sales Dashboard. All rights reserved.
          </p>

          <p className="mt-2">
            Designed & Developed by{" "}
            <a
              href="https://intiyajansarifullstackdeveloper.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Intiyaj Ansari
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
