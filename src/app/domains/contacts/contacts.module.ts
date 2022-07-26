import {NgModule} from "@angular/core";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {CommonModule} from "@angular/common";
import {ContactsComponent} from "./contacts.component";

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    ContactsRoutingModule,
    CommonModule
  ],
  exports: []
})

export class ContactsModule {}
