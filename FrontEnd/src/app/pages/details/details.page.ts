import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  mailDetails!: Email ;

  constructor(private activatedRoute: ActivatedRoute,private EmailService:EmailService,private router :Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
        const emailID = params.get('id');
        if (emailID) {
          this.EmailService.getEmailById(emailID).subscribe(
            (email) => {
              this.mailDetails = email;
            },
            (error) => {
              console.error('Error fetching email details:', error);
            }
          );
        }
      });
  }

  // https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
  private hashCode(str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  openRegister() {
		this.router.navigate(['mail']);
	}
  private intToRGB(i: any) {
    var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }


}
