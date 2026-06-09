import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TagModule } from 'primeng/tag';

@Component({
  standalone: true,
  selector: 'app-transactions-table',
  imports: [CommonModule, MatTableModule, MatSortModule, TagModule],
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {
  @Input() data: Signal<any> | any;

  displayedColumns: string[] = ['id', 'customer', 'product', 'amount', 'status'];
  tableData: any[] = [];

  ngOnInit(): void {
    this.tableData = Array.isArray(this.data) ? this.data : this.data?.() || [];
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }

  getSeverity(status: string): 'success' | 'warning' | 'danger' {
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
