import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newlog',
  templateUrl: './newlog.page.html',
  styleUrls: ['./newlog.page.scss'],
})
export class NewlogPage implements OnInit {


  new_routine_form:FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.new_routine_form = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      wake: new FormControl('', Validators.required),
      exercise: new FormControl('', Validators.required),
      money_spent: new FormControl('', Validators.required),
      activities: new FormControl('', Validators.required)
    });

  }


  goBack(){
    this.router.navigate(['home']);
  }

  // createRoutine() {

  // }

}
