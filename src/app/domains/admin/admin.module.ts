import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {AdminGuard} from "../../services/admin.guard";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: [ProductService, AdminGuard]
})

export class AdminModule {}
