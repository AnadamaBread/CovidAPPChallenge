import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocloginPageRoutingModule } from './doclogin-routing.module';

import { DocloginPage } from './doclogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocloginPageRoutingModule
  ],
  declarations: [DocloginPage]
})
export class DocloginPageModule {}
