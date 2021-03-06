import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {


  current_username: any = "Anon";
  constructor(private router: Router) { }

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
  }s

}
