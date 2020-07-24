import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  new_user_form: FormGroup;
  constructor(private router:Router, public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.new_user_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  signUp() {
    this.router.navigate(['signup'])
  }

}
