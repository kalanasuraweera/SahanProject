import { Component, OnInit } from '@angular/core';
import {Product} from '../product-models';
import {SsProductsService} from '../ss-products.service';

@Component({
  selector: 'ss-ss-products',
  templateUrl: './ss-products.component.html',
  styleUrls: ['./ss-products.component.css']
})
export class SsProductsComponent implements OnInit {

  loadedProducts: Product[];
  displayedColumns: string[] = ['code', 'name'];

  constructor(private ssProductsService: SsProductsService) { }

  ngOnInit(): void {
    this.reloadProductList();
  }

  reloadProductList() {
    let subscription = this.ssProductsService.loadProducts().subscribe(result => {
      if (result) {
        subscription.unsubscribe();
        this.loadedProducts = result;
      }
    });
  }

}
