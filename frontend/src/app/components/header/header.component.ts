import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username: string;
  private user;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  getUsername() {
    this.username = this.loginService.getUsername();
    return this.username;
  }

  signout() {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/']);
  }

}
