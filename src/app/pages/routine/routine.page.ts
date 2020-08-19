import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  openNewRoutinePage(){
    this.router.navigate(['newlog']);
  }

}
