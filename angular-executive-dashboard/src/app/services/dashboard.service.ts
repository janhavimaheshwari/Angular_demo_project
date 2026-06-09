import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, signal } from '@angular/core';
import { DashboardData, KPIData, MonthlySalesData, CategoryData, ProductData, TransactionData, TransactionStatus } from '../models/dashboard.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  isLoading$ = signal(true);
  kpis$ = signal<KPIData>({ revenue: 0, profit: 0, orders: 0, customers: 0 });
  monthlySales$ = signal<MonthlySalesData[]>([]);
  categories$ = signal<CategoryData[]>([]);
  topProducts$ = signal<ProductData[]>([]);
  transactions$ = signal<TransactionData[]>([]);
  selectedDateRange$ = signal<{ start: string; end: string }>({ start: 'Jan', end: 'Dec' });

  filteredMonthlySales$ = computed(() => {
    return this.monthlySales$();
  });

  constructor(private http: HttpClient) {
    this.loadDashboard();
    effect(() => {
      if (!this.isLoading$()) {
        this.filteredMonthlySales$();
      }
    });
  }

  loadDashboard(): void {
    this.http.get<DashboardData>('/assets/dashboard-data.json').subscribe((data) => {
      this.kpis$.set(data.kpis);
      this.monthlySales$.set(data.monthlySales);
      this.categories$.set(data.categories);
      this.topProducts$.set(data.topProducts);
      this.transactions$.set(data.transactions);
      this.isLoading$.set(false);
    });
  }

  getGrowthMetric(key: keyof KPIData): number {
    const growthMap: Record<keyof KPIData, number> = {
      revenue: 12.5,
      profit: 8.3,
      orders: 15.2,
      customers: 10.4
    };
    return growthMap[key] ?? 0;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }

  getTransactionSeverity(status: TransactionStatus): 'success' | 'warning' | 'danger' {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      default:
        return 'danger';
    }
  }
}
