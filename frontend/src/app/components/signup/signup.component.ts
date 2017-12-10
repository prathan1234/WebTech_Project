import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private username: string;
  private email: string;
  private password: string;
  private status: string;
  private result_text: string;

  constructor(private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() {
    this.status = "superadmin";
  }

  signup(username, email, password) {
    this.userManagementService.createNewUser(username, email, password, this.status).subscribe((response) => {
      if (response.success == "true") {
        this.router.navigate(['/login']);
        console.log("Sign in ...");
      }
      else {
        this.result_text = "Already use this username or email!";
      }
    })
    return false;
  }
  
}

interface SignupRespone {
  success: string;
  status: string;
}