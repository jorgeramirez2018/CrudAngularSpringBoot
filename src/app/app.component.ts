import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";
import { CustomerEditComponent } from "./components/customer-edit/customer-edit.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerListComponent, CustomerAddComponent, CustomerEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usuariosSpringBoot';
}
