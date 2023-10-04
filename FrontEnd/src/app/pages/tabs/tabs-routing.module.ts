import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { MailPage } from '../mail/mail.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}