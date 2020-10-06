import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocloginPage } from './doclogin.page';

const routes: Routes = [
  {
    path: '',
    component: DocloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocloginPageRoutingModule {}
