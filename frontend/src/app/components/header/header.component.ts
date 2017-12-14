import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username: string;
  private status: string;
  private user;

  constructor(private loginService: LoginService, private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() {
    
  }

  getUsername() {
    this.username = this.loginService.getUsername();
    return this.username;
  }

  // getStatus() {
  //   return this.status;
  // }

  // getUser() {
  //   this.userManagementService.getProfile(this.loginService.getUsername()).subscribe((response) => {
  //     if (response != null) {
  //       this.status = response.status;
  //     }
  //   });
  //   return false;
  // }

  signout() {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/']);
  }

}
