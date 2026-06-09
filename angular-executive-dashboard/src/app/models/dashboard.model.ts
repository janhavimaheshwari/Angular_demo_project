export interface KPIData {
  revenue: number;
  profit: number;
  orders: number;
  customers: number;
}

export interface MonthlySalesData {
  month: string;
  sales: number;
}

export interface CategoryData {
  category: string;
  value: number;
}

export interface ProductData {
  name: string;
  sales: number;
  revenue: number;
}

export type TransactionStatus = 'Completed' | 'Pending' | 'Cancelled';

export interface TransactionData {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: TransactionStatus;
}

export interface DashboardData {
  kpis: KPIData;
  monthlySales: MonthlySalesData[];
  categories: CategoryData[];
  topProducts: ProductData[];
  transactions: TransactionData[];
}
