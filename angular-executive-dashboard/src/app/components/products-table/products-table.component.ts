import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  standalone: true,
  selector: 'app-products-table',
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  @Input() data: Signal<any> | any;

  displayedColumns: string[] = ['name', 'sales', 'revenue'];
  tableData: any[] = [];

  ngOnInit(): void {
    this.tableData = Array.isArray(this.data) ? this.data : this.data?.() || [];
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }
}
