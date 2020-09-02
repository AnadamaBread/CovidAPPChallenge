import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  new_user_form: FormGroup;
  constructor(public router:Router, public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.new_user_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  signUp() {
    this.router.navigate(['signup'])
  }

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    firebase.auth().signInWithPopup(provider).then(function(result) {
      let token = result.credential.providerId
      let user = result.user
      this.router.navigate(['routine'])
    })
  }

}
