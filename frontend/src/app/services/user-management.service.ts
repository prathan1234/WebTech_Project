import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserManagementService {

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get("http://61.90.233.80:8082/admin/all")
      .map((res) => res.json());
    // return this.http.get("http://localhost:3000/user/all")
    //   .map((res) => res.json());
  }

  getProfile(username) {
    return this.http.get("http://localhost:3000/" + username)
      .map((res) => res.json());
  }

  createNewUser(username, email, password, status) {
    let body = {
      "username": username,
      "email": email,
      "password": password,
      "status": status
    }

    // return this.http.post("http://61.90.233.80:8082/admin/newadmin", body)
    //   .map((res) => res.json());
    return this.http.post("http://localhost:3000/signup", body)
      .map((res) => res.json());
  }

  deleteUser(id) {
    return this.http.delete("http://61.90.233.80:8082/admin/removeadmin/" + id);
  }

  editUser(id, username, password, email, status) {
    let body = {
      "adm_id": id,
      "username": username,
      "email": email,
      "password": password,
      "status": status
    }

    return this.http.put("http://61.90.233.80:8082/admin/editadmin/" + id, body)
      .map((res) => res.json());
  }

}
