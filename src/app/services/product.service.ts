import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";
import {Database} from "../interfaces/database.interface";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  _api: string = 'https://angular-shop-94a7a-default-rtdb.firebaseio.com/product.json'

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Database> {
    return this.http.get<Database>(this._api)
  }

  createProduct(product:Product): void {
    this.http.post(this._api, product).subscribe()
  }
}
