import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteEmailPage } from './write-email.page';

const routes: Routes = [
  {
    path: '',
    component: WriteEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteEmailPageRoutingModule {}
