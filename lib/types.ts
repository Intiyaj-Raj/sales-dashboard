export type MonthSales = {
  month: string;
  sales: number;
  profit: number;
  orders: number;
};

export type CategorySales = {
  category: string;
  sales: number;
  profit: number;
  orders: number;
};

export type RegionSales = {
  region: string;
  sales: number;
  profit: number;
  orders: number;
};

export type YearlySalesData = {
  year: number;
  totalSales: number;
  totalProfit: number;
  totalOrders: number;
  monthly: MonthSales[];
  byCategory: CategorySales[];
  byRegion: RegionSales[];
  topProducts: ProductSales[];
};

export type ProductSales = {
  name: string;
  category: string;
  sales: number;
  quantity: number;
};

export type ChartType = 'bar' | 'line' | 'pie';
