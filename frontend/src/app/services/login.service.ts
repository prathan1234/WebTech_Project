import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private username;
  private password;
  private status;

  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getUsername() {
    return this.username;
  }

  login(username, password) {
    let body = {
      "username": username,
      "password": password
    }

    this.username = username;

    // return this.http.post("http://61.90.233.80:8082/admin/authen", body)
    //   .map((res) => res.json());
    return this.http.post("http://localhost:3000/login", body)
      .map((res) => res.json());
  }

}
