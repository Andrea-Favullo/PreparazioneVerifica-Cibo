import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { DataCiboService } from '../data-cibo.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  routeObs: Observable<ParamMap>;

  product: any;
  ciboServiceObs: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataCiboService,
    private location: Location) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let productID = params.get('id');
    console.log(productID)
    this.ciboServiceObs = this.service.getProduct(productID);
    this.ciboServiceObs.subscribe((data) => this.product = data)

  }

  back(): void {
    this.location.back();
  }

}
