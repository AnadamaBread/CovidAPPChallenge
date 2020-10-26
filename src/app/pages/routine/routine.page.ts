import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../apis/user.service';

import * as firebase from 'firebase';



@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  routines=[];
  curr_routine:any;
  routine:any;
  datab = firebase.firestore();

  current_username: any = "Anon";

  constructor(private router : Router, public us: UserService) {

     // this.us.getObservable().subscribe((data =>{
    //   console.log('Routine Data Received', data);
    //   this.routines = this.us.getRoutines();
    // }))
    
    this.routines = this.us.routines;

    console.log(firebase.auth().currentUser)
    if ( firebase.auth().currentUser == null){
      console.log("user not logged in");
    }

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
    
    // Keep routines loaded after login
    this.routine = this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.router.navigated = false;
      }
    });
   }

  ngOnInit() {
    this.routines = this.us.routines;
    // this.routines = this.us.getRoutines();
  }


  openNewRoutinePage(){
    this.router.navigate(['newlog']);
  }

  goToRoutine(routine){
    console.log("clicked on: ", routine.date);
    this.router.navigate(["logdetail", routine]);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toInteractions(){
    this.router.navigate(['home']);
  }

  toRoutine() {
    this.router.navigate(['routine']);
  }

  toMessages(){
    this.router.navigate(['sms']);

  }

  toAccInfo(){
    this.router.navigate(['account']);

  }

  toAbout(){
    this.router.navigate(['about']);

  }

  toSettings(){
    this.router.navigate(['settings']);

  }
  toEmergency(){
    this.router.navigate(['emergency']);


  }
  toLauncher(){
    this.router.navigate(['launch']);
  }

}
