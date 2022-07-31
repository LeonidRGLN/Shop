import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FirebaseSignUpService} from "../../services/firebase.sign-up.service";
import {SignInComponent} from "./sign-in.component";
import {SignInRoutingModule} from "./sign-in-routing.module";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SignInRoutingModule
  ],
  exports: [],
  providers: []
})

export class SignInModule {}
