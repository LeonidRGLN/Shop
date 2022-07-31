import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up.component';
import {SingUpRoutingModule} from "./sing-up-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FirebaseSignUpService} from "../../services/firebase.sign-up.service";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SingUpRoutingModule
  ],
  exports: [],
  providers: []
})

export class SignUpModule {}
