import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { ThemeService } from '../../services/theme.service';
import { KpiCardComponent } from '../../components/kpi-card/kpi-card.component';
import { RevenueChartComponent } from '../../components/revenue-chart/revenue-chart.component';
import { CategoryChartComponent } from '../../components/category-chart/category-chart.component';
import { ProductsTableComponent } from '../../components/products-table/products-table.component';
import { TransactionsTableComponent } from '../../components/transactions-table/transactions-table.component';

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  imports: [
    CommonModule,
    KpiCardComponent,
    RevenueChartComponent,
    CategoryChartComponent,
    ProductsTableComponent,
    TransactionsTableComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  constructor(
    public dashboardService: DashboardService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
