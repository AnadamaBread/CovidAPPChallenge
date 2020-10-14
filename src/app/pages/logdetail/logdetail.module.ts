import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogdetailPageRoutingModule } from './logdetail-routing.module';

import { LogdetailPage } from './logdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogdetailPageRoutingModule
  ],
  declarations: [LogdetailPage]
})
export class LogdetailPageModule {}
