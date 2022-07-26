import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./domains/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren: () => import('./domains/admin/admin.module').then(md => md.AdminModule)},
  {path: 'catalog', loadChildren: () => import('./domains/catalog/catalog.module').then(md => md.CatalogModule)},
  {path: 'contacts', loadChildren: () => import('./domains/contacts/contacts.module').then(md => md.ContactsModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
