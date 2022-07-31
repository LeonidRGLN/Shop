import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./domains/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren: () => import('./domains/admin/admin.module').then(md => md.AdminModule)},
  {path: 'catalog', loadChildren: () => import('./domains/catalog/catalog.module').then(md => md.CatalogModule)},
  {path: 'contacts', loadChildren: () => import('./domains/contacts/contacts.module').then(md => md.ContactsModule)},
  {path: 'sign-up', loadChildren: () => import('./domains/sign_up/sign-up.module').then(md => md.SignUpModule)},
  {path: 'sign-in', loadChildren: () => import('./domains/sign-in/sign-in.module').then(md => md.SignInModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
