import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private username: string;
  private name: string;
  private status: string;
  private result_text: string;

  constructor(private loginService: LoginService, private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService.getProfile(this.loginService.getUsername()).subscribe((response) => {
      if (response != null) {
        console.log(response);
        this.username = response.username;
        this.name = response.firstname + " " + response.lastname;
        this.status = response.status;
      } else {
        this.result_text = "Not found this user!";
      }
    });
    return false;
  }

}
