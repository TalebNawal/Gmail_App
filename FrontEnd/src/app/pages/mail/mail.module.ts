import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';
import { AccountPageModule } from '../account/account.module';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MailPageRoutingModule,
		AccountPageModule,
		SharedDirectivesModule,
		SharedComponentsModule,
	],
	declarations: [MailPage]
})
export class MailPageModule {}