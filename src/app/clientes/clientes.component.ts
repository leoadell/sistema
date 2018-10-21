import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  customers: any;
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.getCustomersList();
  }
 
  getCustomersList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }
 
  deleteCustomers() {
    this.customerService.deleteAll();
  }
 
}