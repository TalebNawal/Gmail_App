import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router) { }
  @Input('email') m!: Email;
  ngOnInit() {}
  openDetails(id: any) {
		this.router.navigate(['email/', id]);
	}

}
