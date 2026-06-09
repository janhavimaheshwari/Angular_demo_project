import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-kpi-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input() title = '';
  @Input() value = 0;
  @Input() growth = 0;
  @Input() icon = '';
  @Input() color = '';

  valueSignal = signal(0);
  growthSignal = signal(0);

  formattedValue = computed(() => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(this.valueSignal());
  });

  ngOnChanges(): void {
    this.valueSignal.set(this.value as number);
    this.growthSignal.set(this.growth as number);
  }
}
