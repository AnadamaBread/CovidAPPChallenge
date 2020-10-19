import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../apis/user.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  interactions = [];
  curr_interaction:any;
  interact:any;
  datab = firebase.firestore();

  current_username: any = "Anon";

  constructor(private router : Router, public us : UserService){
    

    // this.us.getObservable().subscribe((data =>{
    //   console.log('Interaction Data Received', data);
    //   this.interactions = this.us.getInteractions();
    // }))
    
    this.interactions = this.us.interactions;

    console.log(firebase.auth().currentUser)
    if ( firebase.auth().currentUser == null){
      console.log("user not logged in");
    }

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
    
    // Keep interactions loaded after login
    this.interact = this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folders/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
    this.interactions = this.us.interactions;
    // this.interactions = this.us.getInteractions();
    // if(firebase.auth().currentUser == null){
    //   this.us.setUsertype("guest");
    // }
  }

  openNewInteractionPage(){
    this.router.navigate(['new']);
  }

  logout(){
    this.router.navigate(['start']);

  }

  goToInteraction(interaction){
    console.log("clicked on: ", interaction.date);
    this.router.navigate(["details", interaction]);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.router.navigate(['home']);

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
}

