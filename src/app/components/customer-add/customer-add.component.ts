import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent  implements OnInit {
  nombre : string = '';
  apellido : string = '';
  edad : number = 0;
  email : string = '';

  constructor(private customerService: CustomerService) { 

    
  }

  ngOnInit(): void {
    
  }

  addCustomer() {
    let customer = new Customer(null, this.nombre, this.apellido, this.edad, this.email);
    console.log(customer);

    this.customerService.createCustomer(customer).subscribe(
      data=> console.log('Cliente creado:', data)
    )
  }

  



}
