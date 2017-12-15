import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { EventService } from '../../services/event.service';

import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private eventid: string;
  private eventname: string;
  private author: string;
  private location: string;
  private catagory: string;
  private content: string;
  private starttime: Date;
  private endtime: Date;
  private result_text: string;

  private username: string;

  private eventuserList: EventUser[];

  constructor(private loginService: LoginService, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.username = this.loginService.getUsername();
    this.eventid = this.eventService.getEventId();
    this.getOneEvent(this.eventid);
    this.getUserByEvent(this.eventname);
  }

  // Event model

  getOneEvent(id) {
    this.eventService.getOneEvent(id).subscribe((response) => {
      if (response != null) {
        this.eventname = response.event_name;
        this.author = response.author;
        this.location = response.location;
        this.catagory = response.catagory;
        this.content = response.content;
        this.starttime = response.start_time;
        this.endtime = response.end_time;
      }
      else {
        this.result_text = "Not found this event!";
      }
    });
    return false;
  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id).subscribe((response) => {
      this.router.navigate(['/']);
      alert("Remove event success !!!");
    });
    return false;
  }

  // Eventuser model

  getUserByEvent(event_name) {
    this.eventService.getUserByEvent(event_name).subscribe((response) => {
      this.eventuserList = response;
      console.log("HERE!!!" + response);
    });
    return false;
  }

  getEventByUser(username) {
    this.eventService.getEventByUser(username).subscribe((response) => {
      this.eventuserList = response;
    });
    return false;
  }

  joinEvent(event_name, username) {
    this.eventService.joinEvent(event_name, username).subscribe((response) => {
      if (response != null) {
        this.router.navigate(['/profile']);
      }
    });
    return false;
  }

  cancelEvent(eventuser) {
    this.eventService.cancelEvent(eventuser.event_name, eventuser.username).subscribe((response) => {
      console.log("delete respone : " + response);
      this.router.navigate(['/']);
    });
    return false;
  }
}

interface EventRespone {
  event_name: string;
  author: string;
  location: string;
  catagory: string;
  content: string;
  start_time: Date;
  end_time: Date;
}

interface EventUser {
  event_name: string;
  username: string
}