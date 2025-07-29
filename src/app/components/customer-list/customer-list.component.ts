import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',// obligatorio en standalone
  imports: [CommonModule], // 
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.listCustomers();
  }

  

  listCustomers() {
    this.customerService.getCustomersList().subscribe(
      (data) => {
        this.customers = data;
        console.log(this.customers); // ✅ imprime en consola
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
}
