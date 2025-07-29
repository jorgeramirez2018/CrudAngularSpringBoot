import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

export const routes: Routes = [
  {
    path: 'clientes',
    component: CustomerListComponent,
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full',
  },
];
