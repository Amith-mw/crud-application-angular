import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<Product>;
  product: any;
  productId: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.api.getProduct(this.productId))
    );
  }
}
