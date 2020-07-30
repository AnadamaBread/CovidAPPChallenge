import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // public selectedIndex = 0;
  // public appPages = [
  //   {
  //     title: 'Interactions',
  //     url: 'home',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'Add Interaction',
  //     url: 'new',
  //     icon: 'add'
  //   },
  //   {
  //     title: 'Messages',
  //     url: 'sms',
  //     icon: 'chatbubbles'
  //   },
  //   {
  //     title: 'Account Information',
  //     url: 'account',
  //     icon: 'person'
  //   },
  //   {
  //     title: 'About',
  //     url: 'about',
  //     icon: 'information-circle'
  //   },
  //   {
  //     title: 'Settings',
  //     url: 'settings',
  //     icon: 'settings'

  //   },
  //   {
  //     title: 'Emergency',
  //     url: 'emergency',
  //     icon: 'warning'
  //   }
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private router : Router){}

  ngOnInit() {
    // const path = window.location.pathname.split('folders/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  openNewInteractionPage(){
    this.router.navigate(['new']);
  }

  login(){
    this.router.navigate(['login']);

  }
}

