import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../apis/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor( private themeService:ThemeService, ) { }

  ngOnInit() {
  }

  enableDark(){
    this.themeService.enableDark();
  }
  enableLight(){
    this.themeService.enableLight();
  }

}
