import { Component, OnInit } from '@angular/core';
import {Orderr} from "../../../models/orderr";
import {OrderService} from "../../../services/order.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  API = 'http://localhost:8888/orders/'
  orderr: any;

  constructor(private orderService: OrderService,
              private activatedRouter: ActivatedRoute,
              private httClient: HttpClient) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      this.httClient.get(this.API + param.get('id')).subscribe((data) => {
        this.orderr = data
      })
    })
  }


}
