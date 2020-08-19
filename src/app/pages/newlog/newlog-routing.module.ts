import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewlogPage } from './newlog.page';

const routes: Routes = [
  {
    path: '',
    component: NewlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewlogPageRoutingModule {}
