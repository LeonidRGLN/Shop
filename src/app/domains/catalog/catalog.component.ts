import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product.interface";
import {map} from "rxjs";

@Component({
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss'],
  providers: []
})

export class CatalogComponent implements OnInit {

  products: Product[] = []

  constructor(private httpService: ProductService) {}

  ngOnInit() {
    this.httpService.getProduct()
      .pipe(
        map(value => Object.values(value))
      )
      .subscribe((value:any) => this.products = value)
  }

  log(event: any) {
    console.log(event.target.value)
  }

  log2() {
    console.log(this.products)
  }
}
