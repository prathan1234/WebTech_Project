import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserManagementService {

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get("http://localhost:3000/user/all")
      .map((res) => res.json());
  }

  getProfile(username) {
    return this.http.get("http://localhost:3000/" + username)
      .map((res) => res.json());
  }

  createNewUser(username, firstname, lastname, phonenumber, email, password, status) {
    let body = {
      "username": username,
      "firstname": firstname,
      "lastname": lastname,
      "phonenumber": phonenumber,
      "email": email,
      "password": password,
      "status": status
    }

    return this.http.post("http://localhost:3000/signup", body)
      .map((res) => res.json());
  }

  deleteUser(username) {
    return this.http.get("http://localhost:3000/user/remove/" + username);
  }

  editUser(username, firstname, lastname, phonenumber, email, password) {
    let body = {
      "password": password,
      "email": email,
      "phonenumber": phonenumber,
      "firstname": firstname,
      "lastname": lastname
    }

    // return this.http.put("http://61.90.233.80:8082/admin/editadmin/" + username, body)
    //   .map((res) => res.json());
    return this.http.put("http://localhost:3000/user/edit/" + username, body)
    .map((res) => res.json());
  }

}
