import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {ProductService} from "../../services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    CatalogRoutingModule


  ],
  exports: [],
  providers: [ProductService]
})

export class CatalogModule {}
