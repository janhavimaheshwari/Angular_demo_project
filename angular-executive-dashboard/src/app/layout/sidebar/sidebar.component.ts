import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: SidebarItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Analytics', icon: 'pi pi-chart-bar', route: '/dashboard' },
    { label: 'Reports', icon: 'pi pi-file', route: '/dashboard' },
    { label: 'Customers', icon: 'pi pi-users', route: '/dashboard' },
    { label: 'Products', icon: 'pi pi-box', route: '/dashboard' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/dashboard' }
  ];
}
