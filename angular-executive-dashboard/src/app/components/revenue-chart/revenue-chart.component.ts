import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

interface ChartConfig {
  labels: string[];
  datasets: { label: string; data: number[]; borderColor: string; backgroundColor: string; fill: boolean; tension: number }[];
}

@Component({
  standalone: true,
  selector: 'app-revenue-chart',
  imports: [CommonModule, ChartModule],
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent {
  @Input() data: Signal<any> | any;

  chartConfig: ChartConfig | null = null;

  ngOnInit(): void {
    this.buildChart();
  }

  buildChart(): void {
    const data = Array.isArray(this.data) ? this.data : this.data?.() || [];
    this.chartConfig = {
      labels: data.map((d: any) => d.month),
      datasets: [
        {
          label: 'Monthly Revenue',
          data: data.map((d: any) => d.sales),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.05)',
          fill: true,
          tension: 0.4
        }
      ]
    };
  }
}
