import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string='';
  email: string='';
  
  password: string='';
  confirmPassword: string='';
  passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password strength regex
  constructor(private userService: UserService, private router: Router,private toastController: ToastController) { }
  openLogin() {
    this.router.navigate([ 'meet']);
  }
  register() {

    if (!this.email || !this.username || !this.password  || !this.confirmPassword ) {
      this.showErrorMessage('Please fill in all required fields');
      return; // Arrêter l'envoi de l'e-mail si un champ est manquant
    }
  
    // Vérifier si l'adresse e-mail est correctement saisie
    
   

    // Check email format using a basic regex
    const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormatRegex.test(this.email)) {
      this.showErrorMessage('Invalid email format');
      return;
      
    }
    if (!this.passwordStrengthRegex.test(this.password)) {
      this.showErrorMessage('Password is not strong enough');
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.showErrorMessage('Passwords do not match');
      return;
      
    }
    
    this.userService.getUserByUsername(this.username).subscribe(
      (existingUserByUsername: User) => {
        if (existingUserByUsername) {
          this.showErrorMessage('Username already exists');
          return;
        }
    },
);
this.userService.getUserByEmail(this.email).subscribe(
  (existingUserByEmail: User) => {
    if (existingUserByEmail) {
      this.showErrorMessage('Email already exists');
      return;
    }
  },
  );
    const user: User = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

  
    this.userService.createUser(user).subscribe(
      (createdUser: User) => {
        console.log('Registration successful');
        this.router.navigate(['meet']);
        // Redirect the user to the desired page after successful registration
      },
      (error: any) => {
        console.log('Registration failed:', error);
        // Display an error message to the user
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
  

}

