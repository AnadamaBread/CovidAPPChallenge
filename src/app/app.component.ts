import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBRpsbHvgndaqtkn9KiD7cXFq2SK_lDzsU",
  authDomain: "covid19-appchallenge.firebaseapp.com",
  databaseURL: "https://covid19-appchallenge.firebaseio.com",
  projectId: "covid19-appchallenge",
  storageBucket: "covid19-appchallenge.appspot.com",
  messagingSenderId: "728871485189",
  appId: "1:728871485189:web:4ac13c8d4d2bd7b0f2416c",
  measurementId: "G-J9W4JN3KJP"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Interactions',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Add Interaction',
      url: 'new',
      icon: 'add'
    },
    {
      title: 'Routine Log',
      url: 'routine',
      icon: 'leaf'
    },
    {
      title: 'Messages',
      url: 'sms',
      icon: 'chatbubbles'
    },
    {
      title: 'Account Information',
      url: 'account',
      icon: 'person'
    },
    {
      title: 'About',
      url: 'about',
      icon: 'information-circle'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings'

    },
    {
      title: 'Emergency',
      url: 'emergency',
      icon: 'warning'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
