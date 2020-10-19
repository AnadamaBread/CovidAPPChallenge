import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../apis/theme.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  current_username: any = "Anon";

  constructor( private themeService:ThemeService, private router: Router) { }

  ngOnInit() {
  }

  enableDark(){
    this.themeService.enableDark();
  }
  enableLight(){
    this.themeService.enableLight();
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
