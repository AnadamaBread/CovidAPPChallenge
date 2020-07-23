import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveSmsPage } from './active-sms.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveSmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveSmsPageRoutingModule {}
