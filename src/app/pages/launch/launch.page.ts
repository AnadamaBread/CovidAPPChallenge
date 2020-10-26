import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../apis/user.service';


import * as firebase from 'firebase';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.page.html',
  styleUrls: ['./launch.page.scss'],
})
export class LaunchPage implements OnInit {

  constructor(private router : Router, public us : UserService) { }

  ngOnInit() {
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
