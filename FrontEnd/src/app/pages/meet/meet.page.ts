import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.page.html',
  styleUrls: ['./meet.page.scss'],
})
export class MeetPage 
{
  username: string='';
  password: string='';

  @Output() SampleEx = new EventEmitter<String>();
  constructor(private userService: UserService, private router: Router) { }
  openRegister() {
		this.router.navigate(['home']);
	}
  login() {
    this.userService.getUserByUsername(this.username).subscribe(
      (user) => {
        if (user && user.password === this.password) {
          console.log('Login successful');
          this.SampleEx.emit(this.username)
          // Redirect the user to the desired page after successful login
          this.router.navigate(['mail']);
        } else {
          console.log('Login failed');
          
        }
      },
      (error) => {
        console.log('Error retrieving user:', error);
      
      }
    );
  }
}

