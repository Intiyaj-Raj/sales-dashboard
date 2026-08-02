import { YearlySalesData } from './types';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const CATEGORIES = ['Electronics', 'Furniture', 'Office Supplies', 'Technology'];
const REGIONS = ['North', 'South', 'East', 'West', 'Central'];

// Deterministic pseudo-random generator so data is stable across renders
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateYearData(year: number, baseGrowth: number): YearlySalesData {
  const rng = seededRandom(year * 1000 + 42);
  const monthly = MONTHS.map((month, i) => {
    const seasonal = 1 + 0.3 * Math.sin((i / 12) * Math.PI * 2);
    const noise = 0.8 + rng() * 0.4;
    const sales = Math.round((45000 * baseGrowth * seasonal * noise) / 100) * 100;
    const profit = Math.round(sales * (0.15 + rng() * 0.1) / 100) * 100;
    const orders = Math.round(sales / 350 + rng() * 50);
    return { month, sales, profit, orders };
  });

  const byCategory = CATEGORIES.map((category) => {
    const share = 0.15 + rng() * 0.3;
    const totalSales = monthly.reduce((sum, m) => sum + m.sales, 0);
    const sales = Math.round((totalSales * share) / 100) * 100;
    const profit = Math.round(sales * (0.12 + rng() * 0.08) / 100) * 100;
    const orders = Math.round(sales / 350);
    return { category, sales, profit, orders };
  });

  const byRegion = REGIONS.map((region) => {
    const share = 0.1 + rng() * 0.25;
    const totalSales = monthly.reduce((sum, m) => sum + m.sales, 0);
    const sales = Math.round((totalSales * share) / 100) * 100;
    const profit = Math.round(sales * (0.14 + rng() * 0.06) / 100) * 100;
    const orders = Math.round(sales / 400);
    return { region, sales, profit, orders };
  });

  const productNames = [
    'Wireless Mouse', 'Office Chair', 'Laptop Stand', 'USB-C Hub',
    'Standing Desk', 'Notebook Pack', 'Monitor Arm', 'Mechanical Keyboard',
    'Filing Cabinet', 'Webcam Pro', 'Desk Lamp', 'Printer Cartridge',
  ];

  const topProducts = productNames.map((name, i) => {
    const category = CATEGORIES[i % CATEGORIES.length];
    const sales = Math.round((8000 + rng() * 25000) / 100) * 100;
    const quantity = Math.round(sales / (50 + rng() * 200));
    return { name, category, sales, quantity };
  }).sort((a, b) => b.sales - a.sales).slice(0, 8);

  const totalSales = monthly.reduce((sum, m) => sum + m.sales, 0);
  const totalProfit = monthly.reduce((sum, m) => sum + m.profit, 0);
  const totalOrders = monthly.reduce((sum, m) => sum + m.orders, 0);

  return {
    year,
    totalSales,
    totalProfit,
    totalOrders,
    monthly,
    byCategory,
    byRegion,
    topProducts,
  };
}

export const salesData: Record<number, YearlySalesData> = {
  2024: generateYearData(2024, 1.15),
  2023: generateYearData(2023, 1.0),
  2022: generateYearData(2022, 0.85),
};

export const availableYears = [2024, 2023, 2022];

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toLocaleString()}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString();
}
