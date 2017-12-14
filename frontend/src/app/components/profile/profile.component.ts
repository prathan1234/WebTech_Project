import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private id;
  private username: string;
  private password: string;
  private firstname: string;
  private lastname:string;
  private phonenumber: string;
  private email: string;
  private status: string;
  private result_text: string;

  constructor(private loginService: LoginService, private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() {
    this.userManagementService.getProfile(this.loginService.getUsername()).subscribe((response) => {
      if (response != null) {
        console.log(response);
        this.id = response._id;
        this.username = response.username;
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.phonenumber = response.phonenumber;
        this.email = response.email;
        this.status = response.status;
      } else {
        this.result_text = "Not found this user!";
      }
    });
    return false;
  }

  editUser(firstname, lastname, phonenumber, email, password) {
    this.userManagementService.editUser(this.username, firstname, lastname, phonenumber, email, password).subscribe((response) => {
      if (response.success == "true") {
        this.router.navigate(['/profile']);
        console.log("Edit complete!");
      }
      else {
        this.result_text = "Something Wrong! Please try again.";
      }
    });
    return false;
  }

}
