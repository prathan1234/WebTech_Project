import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { UserManagementService } from '../../services/user-management.service';
import { EventService } from '../../services/event.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // User component
  private id;
  private username: string;
  private password: string;
  private firstname: string;
  private lastname: string;
  private phonenumber: string;
  private email: string;
  private status: string;

  // Event component
  private eventid: string;
  private eventname: string;
  private author: string;
  private location: string;
  private catagory: string;
  private content: string;
  private starttime: Date;
  private endtime: Date;

  private eventList: Event[];

  private result_text: string;
  private result_text_event: string;

  constructor(private loginService: LoginService, private userManagementService: UserManagementService, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.getUserEvent();
  }

  getProfile() {
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
      }
      else {
        this.result_text = "Not found this user!";
      }
    });
    return false;
  }

  getOneEvent(id) {
    if (id != null && id != "") {
      this.eventService.setEventId(id);
      this.router.navigate(['/event/' + id]);
    }
  }

  getUserEvent() {
    this.eventService.getUserEvent(this.loginService.getUsername()).subscribe((response) => {
      this.eventList = response;
      if (response != null && this.eventList.length > 0) {
        for (let i = 0; i < this.eventList.length; i++) {
          if (this.eventList[i].catagory == null) {
            this.eventList[i].catagory = "None";
          }
        }
      }
      else {
        this.result_text_event = "Not found your event!";
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

  getCatagory(catagory) {
    this.catagory = catagory;
  }

  getStartDate(starttime) {
    this.starttime = starttime;
    console.log(this.starttime);
  }

  getEndDate(endtime) {
    this.endtime = endtime;
    console.log(this.endtime);
  }

  addEvent(eventname, location, content) {
    this.author = this.username;
    this.eventService.addEvent(eventname, this.author, location, this.catagory, content, this.starttime, this.endtime).subscribe((response) => {
      if (response.success == "true") {
        this.router.navigate(['/']);
        alert("Add event success !!!");
      }
      else {
        this.result_text = "Something Wrong! Please try again.";
      }
    });
    return false;
  }

  deleteEvent(event) {
    this.eventList.forEach((element, index) => {
      if (element == event) {
        this.eventService.deleteEvent(event._id).subscribe((response) => {
          console.log("delete respone : " + response);
        });
        this.eventList.splice(index, 1);
      }
    });
    return false;
  }

}

interface Event {
  event_name: string;
  author: string;
  location: string;
  catagory: string;
  content: string;
  start_time: Date;
  end_time: Date;
}

interface GetUserEventRespone {
  event_name: string;
  author: string;
  location: string;
  catagory: string;
  content: string;
  start_time: Date;
  end_time: Date;
}

interface AddEventRespone {
  success: string;
  status: string;
}