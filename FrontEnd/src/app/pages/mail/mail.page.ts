import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccountPage } from '../account/account.page';
import { Observable, map } from 'rxjs';
import { Email } from 'src/app/models/email';
import { EmailService } from '../../services/email.service';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
	selector: 'app-mail',
	templateUrl: './mail.page.html',
	styleUrls: ['./mail.page.scss']
})
export class MailPage implements OnInit {
	public appPages = [
		{ title: 'All Messages', url: '/folder/inbox', icon: 'mail' },
		{ title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
		{ title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
		{ title: 'Archived', url: '/folder/archived', icon: 'archive' },
		{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
		{ title: 'Spam', url: '/folder/spam', icon: 'warning' },
	  ];
	  public labels = [];
	emails!: any[] 
	color!:string;
	
	constructor(
		private http: HttpClient,
		private popoverCtrl: PopoverController,
		private router: Router,
		private EmailService:EmailService,
		private changeDetector: ChangeDetectorRef,private axiosService: AxiosService
	) {}

	ngOnInit() {
		
		this.http
			.get<any[]>('http://localhost:8080/mail/emails')
			.subscribe(res=> {
				this.emails = res.map(email => {
					email.color = this.intToRGB((this.hashCode(email.to)));
					return email;
				});
				
					console.log(this.emails);
				
			});
	}
	
	getEmails() {
		this.EmailService.getEmailList().subscribe((emailArray: any[]) => {
			this.emails = emailArray;
			console.log('emails:', this.emails);
		  });
	  }

	openDetails(id: any) {
		this.router.navigate(['email/', id]);
	}
	openWrite() {
		this.router.navigate([ 'write']);
	}

	// https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
	private hashCode(str: string) {
		var hash = 0;
		for (var i = 0; i < str.length; i++) {
		  hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return hash;
	  }
	
	  private intToRGB(i: any) {
		var c = (i & 0x00FFFFFF)
		  .toString(16)
		  .toUpperCase();
	
		return '#' + '00000'.substring(0, 6 - c.length) + c;
	  }
	doRefresh(ev: any) {
		this.http
			.get<any[]>('http://localhost:8080/mail/emails')
			.subscribe(res=> {
				this.emails = res.map(email => {
					email.color = this.intToRGB((this.hashCode(email.to)));
					return email;
				});
				
					console.log(this.emails);
				
			});
		setTimeout(() => {
			ev.target.complete();
		}, 2000);
	}
	async openAccount(ev: any) {
		const popover = await this.popoverCtrl.create({
		  component: AccountPage,
		  event: ev,
		  cssClass: 'custom-popover'
		});
	  
		await popover.present();
	  }

	
}