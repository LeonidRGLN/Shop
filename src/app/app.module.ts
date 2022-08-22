import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire/compat";
import { AppComponent } from './app.component';
import { HomeComponent } from './domains/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {FirebaseSignUpService} from "./services/firebase.sign-up.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6ggHjuaqcHX6FUXJ5SraX5RE9ZALeaQM",
      authDomain: "angular-shop-94a7a.firebaseapp.com",
      databaseURL: "https://angular-shop-94a7a-default-rtdb.firebaseio.com",
      projectId: "angular-shop-94a7a",
      storageBucket: "angular-shop-94a7a.appspot.com",
      messagingSenderId: "549255211157",
      appId: "1:549255211157:web:09492b2750e1c43bc6939c",
      measurementId: "G-69Q3GLCZ75"
    }),
    AppRoutingModule
  ],
  exports:[],
  providers: [FirebaseSignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
