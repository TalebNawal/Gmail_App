import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MailPage } from './pages/mail/mail.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'meet',
		pathMatch: 'full'
	},
	
	{
		path: 'mail',
		loadChildren: () => import('./pages/mail/mail.module').then((m) => m.MailPageModule)
	},
	
	{
		path: 'email/:id',
		loadChildren: () => import('./pages/details/details.module').then((m) => m.DetailsPageModule)
	},
	
	{
		path: 'write',
		loadChildren: () => import('./pages/write-email/write-email.module').then((m) => m.WriteEmailPageModule)
	},
	 {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'meet',
    loadChildren: () => import('./pages/meet/meet.module').then( m => m.MeetPageModule)
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}