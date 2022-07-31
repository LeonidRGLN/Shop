import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product.interface";
import {BehaviorSubject, filter, map} from "rxjs";

@Component({
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss'],
  providers: []
})

export class CatalogComponent implements OnInit, AfterViewInit, OnDestroy{

  products: Product[] = []
  data: Product[] = []

  // term: string = ''

  sub = new BehaviorSubject<string>('')

  constructor(private httpService: ProductService) {}

  ngOnInit() {
    this.httpService.getProduct()
      .pipe(
        map(value => Object.values(value))
      )
      .subscribe((value: Product[]) => {
        this.products = value
        this.data = value
      })
  }

  ngAfterViewInit(): void {
    this.sub
      .subscribe((value) => {
        this.data = this.products.filter((product) => product.productType === value)
      })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }

  showProducts(event: any) {
    this.sub.next(event.target.value)
  }
}
