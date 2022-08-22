import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product.interface";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Database} from "../../interfaces/database.interface";

@Component({
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss'],
  providers: []
})

export class CatalogComponent implements OnInit, AfterViewInit, OnDestroy{

  dataFireBase: Product[] = []
  products: Product[] = []
  // refreshProducts:Product[] = []
  productObservable$: Observable<Database> = this.productService.getProduct()
  basketTarget: Product[] | undefined;
  targetProduct: Product | undefined;
  basket: Product[] = []


  subFilterProducts = new BehaviorSubject<string>('')
  // sub2 = new BehaviorSubject<any>('')

  stateBasketClear = false
  stateBasketForm = false


  addProductInBasket(value:number | string) {
    this.basketTarget = this.dataFireBase.filter((product) => product.productId === value)
    this.targetProduct = this.basketTarget[0]
    this.basket.push(this.targetProduct)
    this.stateBasketClear = true
  }

  // refreshProduct() {
  //   this.sub2.next(this.refreshProducts)
  // }

  clearProductInBasket() {
    this.basket = []
    this.stateBasketClear = false
  }

  showBasketForm() {
    this.stateBasketForm = !this.stateBasketForm
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productObservable$
      .pipe(
        map((value: Database) => Object.values(value))
      )
      .subscribe((value: Product[]) => {
        this.products = value
        this.dataFireBase = value
        // this.refreshProducts = value
      })
  }

  ngAfterViewInit(): void {
    this.subFilterProducts
      .subscribe((value) => {
        this.products = this.dataFireBase.filter((product) => product.productType === value)
      })

    // this.sub2
    //   .subscribe((value) => {
    //     this.data = this.refreshProducts = value
    //     console.log(this.refreshProducts)
    //     console.log(this.data)
    //   })
  }

  ngOnDestroy(): void {
      this.subFilterProducts.unsubscribe()
  }

  showProducts(event: any) {
    this.subFilterProducts.next(event.target.value)
    console.log(event)
  }
}
