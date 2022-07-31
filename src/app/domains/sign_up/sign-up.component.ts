import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {FirebaseSignUpService} from "../../services/firebase.sign-up.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  myForm: FormGroup;
  isSignedIn = false;

  constructor(public firebaseService: FirebaseSignUpService, private formBuilder: FormBuilder ) {
    this.myForm = formBuilder.group({
      'userName': ['', [Validators.required]],
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

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
      this.myForm.reset()
      alert("Пользователь зарегистрирован")
  }
}



