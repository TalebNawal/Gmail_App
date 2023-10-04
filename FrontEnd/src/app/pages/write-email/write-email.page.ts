import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { Email } from '../../models/email';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-write-email',
  templateUrl: './write-email.page.html',
  styleUrls: ['./write-email.page.scss'],
})
export class WriteEmailPage implements OnInit {

  id: string = '';
  to: string = '';
  cc: string[] = []; // List of CC email addresses
  from: string = ''; // Sender's email
  subject: string = '';
  message: string = '';
  currentDate: string = new Date().toISOString();
  email: Email; // Declare the email object without initializing it
  user!:User;
	private userSubscription!: Subscription; 

  constructor(private router: Router, private emailService: EmailService,private toastController: ToastController,private userservice:UserService) {
    // Initialize the email object here
    this.email = new Email('', '', [], '', '', this.currentDate, false,'');
  }

  ngOnInit() {
    this.userSubscription = this.userservice.getUser().subscribe(
			(user: User) => {
			  this.user = user; // Mettre à jour la variable user avec les données reçues
			},
			(error) => {
			  console.error(error);
			}
		  );
    // No need to set email.date and email.star here, already done in the constructor
  }
  sendMail(email: Email) {
    // Vérifier si les champs requis sont remplis
    if (!email.subject || !email.body || !email.to) {
      this.showErrorMessage('Please fill in all required fields.');
      return; // Arrêter l'envoi de l'e-mail si un champ est manquant
    }
  
    // Vérifier si l'adresse e-mail est correctement saisie
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.to.match(emailPattern)) {
      this.showErrorMessage('Please enter a valid email address.');
      return; // Arrêter l'envoi de l'e-mail si l'adresse e-mail est invalide
    }
    for (const ccEmail of email.cc) {
      if (ccEmail && !ccEmail.match(emailPattern)) {
        this.showErrorMessage('Please enter valid email addresses in the "CC" field.');
        return; // Arrêter l'envoi de l'e-mail si une adresse e-mail CC est invalide
      }
    }
    // Envoyer l'e-mail si les champs sont remplis et l'adresse e-mail est valide
    this.emailService.postEmail(email).subscribe(
      (data) => {
        console.log(data);
        this.resetFields();
        this.showSuccessMessage();
        this.router.navigate(['mail']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  
  async showErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Durée en millisecondes
      position: 'top', // Position du toast (top, bottom, or middle)
      color: 'danger', // Couleur du toast
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        },
      ],
    });
    toast.present(); // Afficher le toast
  }
  

  // Method to add a CC email to the list
  addCcEmail() {
    if (this.email.cc) {
      this.email.cc.push('');
    } else {
      this.email.cc = [''];
    }
  }

  // Method to remove a CC email from the list
  removeCcEmail(index: number) {
    if (this.email.cc && this.email.cc.length > index) {
      this.email.cc.splice(index, 1);
    }
  }
  resetFields() {
    this.email.to = '';
    this.email.cc = [];
    this.email.subject = '';
    this.email.body = '';
  }
  async showSuccessMessage() {
    const toast = await this.toastController.create({
      message: 'Email sent successfully!',
      duration: 2000, // Duration in milliseconds
      position: 'top', // Position of the toast (top, bottom, or middle)
      color: 'success', // Color of the toast
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        },
      ],
    });
    toast.present(); // Show the toast
  }
}
