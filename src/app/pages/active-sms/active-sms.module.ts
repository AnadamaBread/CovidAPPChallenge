import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveSmsPageRoutingModule } from './active-sms-routing.module';

import { ActiveSmsPage } from './active-sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveSmsPageRoutingModule
  ],
  declarations: [ActiveSmsPage]
})
export class ActiveSmsPageModule {}
