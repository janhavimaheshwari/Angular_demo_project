import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

interface DoughnutChartConfig {
  labels: string[];
  datasets: { data: number[]; backgroundColor: string[] }[];
}

@Component({
  standalone: true,
  selector: 'app-category-chart',
  imports: [CommonModule, ChartModule],
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss']
})
export class CategoryChartComponent {
  @Input() data: Signal<any> | any;

  chartConfig: DoughnutChartConfig | null = null;

  ngOnInit(): void {
    this.buildChart();
  }

  buildChart(): void {
    const data = Array.isArray(this.data) ? this.data : this.data?.() || [];
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
    this.chartConfig = {
      labels: data.map((d: any) => d.category),
      datasets: [
        {
          data: data.map((d: any) => d.value),
          backgroundColor: colors.slice(0, data.length)
        }
      ]
    };
  }
}
