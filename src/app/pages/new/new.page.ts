import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  new_interaction_form:FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.new_interaction_form = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      topic: new FormControl('', Validators.required),
      words: new FormControl('', Validators.required),
      tone: new FormControl('', Validators.required),
      feel: new FormControl('', Validators.required),
      pros: new FormControl('', Validators.required),
      edit: new FormControl('', Validators.required),

    });
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
