import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  goToDocLogin(){
    this.router.navigate(['doclogin']);
  }

}
