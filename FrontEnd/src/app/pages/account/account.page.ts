import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MailPage } from '../mail/mail.page';
import { UserService } from 'src/app/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-account',
	templateUrl: './account.page.html',
	styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
	constructor(private popoverCtrl: PopoverController, private router: Router,private userservice:UserService) {}
	message:string='';
	user!:User;
	private userSubscription!: Subscription; 

	ngOnInit() {
		this.userSubscription = this.userservice.getUser().subscribe(
			(user: User) => {
			  this.user = user; // Mettre à jour la variable user avec les données reçues
			},
			(error) => {
			  console.error(error);
			}
		  );
	}
	LogOut() {
		this.popoverCtrl.dismiss();
		this.router.navigate(['meet']);
	}
	NextCom($event: string) {
        this.message = $event;
    }
	close() {
		this.popoverCtrl.dismiss();
	}
}