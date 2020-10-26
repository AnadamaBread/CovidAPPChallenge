import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  current_username: any = "Anon";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLoginPage(){
    this.router.navigate(['login']);

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
