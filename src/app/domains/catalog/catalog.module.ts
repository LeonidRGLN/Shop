import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {ProductService} from "../../services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CatalogRoutingModule
  ],
  exports: [],
  providers: [ProductService]
})

export class CatalogModule {}
