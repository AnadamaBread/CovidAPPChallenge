import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../apis/user.service';
import { AlertController } from '@ionic/angular';

import * as firebase from 'firebase';

@Component({
  selector: 'app-logdetail',
  templateUrl: './logdetail.page.html',
  styleUrls: ['./logdetail.page.scss'],
})
export class LogdetailPage implements OnInit {

  curr_r = null;
  datab = firebase.firestore();

  constructor(private router: Router, private activatedRoute : ActivatedRoute,
     public us : UserService, public alert: AlertController) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(param => {
      this.curr_r = param;
      console.log(this.curr_r);
    })
  }
  async deleteRoutine() {
    let confirm = await this.alert.create ({
      message : " Delete this product: "+this.curr_r.date+ " ? ",
      buttons : [
        {
          text: "YES",
          
          handler: () => {
            console.log("delete approved...");
            this.doDelete();
          }
        },
        {
          text: "NO",
          role: 'cancel',
          handler: () => {
            console.log("delete was not approved");
          }
        }
      ]
    });
    await confirm.present();
  }

  doDelete() {
    console.log("Deleting Interaction from: ",this.curr_r.date);

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



}
