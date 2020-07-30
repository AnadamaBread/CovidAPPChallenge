import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  limg = "assets/Luis.png";
  timg = "assets/Tommy.png";
  jimg = "assets/Johnny.png";
  constructor() { }

  ngOnInit() {
  }

}
