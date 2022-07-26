import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: CatalogComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class CatalogRoutingModule {}
