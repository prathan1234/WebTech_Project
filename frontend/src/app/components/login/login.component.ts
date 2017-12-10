import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private result_text: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  login(username, password) {
    this.loginService.login(username, password).subscribe((response) => {
      if (response.success == "true") {
        this.loginService.setUserLoggedIn();
        this.router.navigate(['/']);
        console.log("Logging in ...");
      } else {
        this.result_text = "Incorrect username or password!";
      }
    })
    return false;
  }
}

interface LoginResponse {
  success: string;
  status: string;
}
