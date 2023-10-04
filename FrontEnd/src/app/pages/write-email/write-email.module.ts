import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteEmailPageRoutingModule } from './write-email-routing.module';

import { WriteEmailPage } from './write-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteEmailPageRoutingModule
  ],
  declarations: [WriteEmailPage]
})
export class WriteEmailPageModule {}
