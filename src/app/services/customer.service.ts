import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  [x: string]: any;
  private api: string = 'http://localhost:8080/usuarios';


  constructor(private http: HttpClient) {}

  getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.api}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.api}/guardar`, customer);

  }

  
}
