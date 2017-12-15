import { Component, OnInit } from '@angular/core';

import { UserManagementService } from '../../services/user-management.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private userList: User[];
  private eventList: Event[];

  constructor(private userManagementService: UserManagementService, private eventService: EventService) { }

  ngOnInit() {
    this.getAllUser();
    this.getAllEvent();
  }

  // User management
  getAllUser() {
    this.userManagementService.getAllUser().subscribe((response) => {
      this.userList = response;
    })
  }

  deleteUser(user) {
    this.userList.forEach((element, index) => {
      if (element == user) {
        console.log(user);
        this.userManagementService.deleteUser(user.username).subscribe((response) => {
          console.log("delete respone : " + response);
        });
        this.userList.splice(index, 1);
      }
    });
    return false;
  }

  // Event management
  getAllEvent() {
    this.eventService.getAllEvent().subscribe((response) => {
      this.eventList = response;
    })
  }
}

interface User {
  _id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  status: string;
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