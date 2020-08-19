import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlogPageRoutingModule } from './newlog-routing.module';

import { NewlogPage } from './newlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewlogPageRoutingModule
  ],
  declarations: [NewlogPage]
})
export class NewlogPageModule {}
