import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  _api: string = 'https://angular-shop-94a7a-default-rtdb.firebaseio.com/product.json'

  constructor(private http: HttpClient) {}

  getProduct(): Observable<JSON> {
    return this.http.get<JSON>(this._api)
  }

  createProduct(product:Product): void {
    this.http.post(this._api, product).subscribe()
  }
}
