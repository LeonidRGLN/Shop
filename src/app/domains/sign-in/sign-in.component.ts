import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FirebaseSignUpService} from "../../services/firebase.sign-up.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  myForm: FormGroup;
  isSignedIn = false;

  constructor(public firebaseService: FirebaseSignUpService, private formBuilder: FormBuilder ) {
    this.myForm = formBuilder.group({
      'userEmail': ['', [Validators.required]],
      'userPassword': ['', [Validators.required]],
    })
  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
      this.myForm.reset()
      alert("Пользователь авторизован")
      console.log(this.isSignedIn)
  }

  handleLogout() {
    this.firebaseService.logout()
    this.isSignedIn = false
  }

}
