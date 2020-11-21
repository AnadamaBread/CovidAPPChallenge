import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../apis/user.service';
import { AlertController } from '@ionic/angular';

import * as firebase from 'firebase';


@Component({
  selector: 'app-acc-setup',
  templateUrl: './acc-setup.page.html',
  styleUrls: ['./acc-setup.page.scss'],
})
export class AccSetupPage implements OnInit {

  constructor(private router: Router, private activatedRoute : ActivatedRoute,
    public us : UserService, public alert: AlertController) { }

  ngOnInit() {
  }

  async ClearInfo() {
    let confirm = await this.alert.create ({
      message : " This will reset all user information on this page to default. Continue?",
      buttons : [
        {
          text: "YES",
          
          handler: () => {
            console.log("Clear approved...");
            this.doDelete();
          }
        },
        {
          text: "NO",
          role: 'cancel',
          handler: () => {
            console.log("Clear was not approved");
          }
        }
      ]
    });
    await confirm.present();
  }

  doDelete() {
    console.log("Clearing User Information");

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
