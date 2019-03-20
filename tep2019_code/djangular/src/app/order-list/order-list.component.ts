import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Order } from '../models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private orders: Array<Order> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getOrders();
  }

  public getOrders() {
    this.apiService.fetchAll("orders").subscribe((data: Array<Order>) => {
      this.orders = data;
    });
  }

}
