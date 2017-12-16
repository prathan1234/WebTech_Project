import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { EventService } from '../../services/event.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  private eventList: Event[];
  private result_text: string;

  private username: string;

  constructor(private loginService: LoginService, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.username = this.loginService.getUsername();
    this.getAllEvent();
    // this.search();
  }

  // Search model

  search() {
    this.eventService.searchEvent(this.eventService.getKeyword()).subscribe((response) => {
      this.eventList = response;
      if (response == null && this.eventList.length == 0) {
        this.result_text = "Not found event!";
      }
    });
  }

  // Event model

  getAllEvent() {
    this.eventService.getAllEvent().subscribe((response) => {
      this.eventList = response;
      if (response == null && this.eventList.length == 0) {
        this.result_text = "Not found event!";
      }
    })
  }

  getOneEvent(id) {
    if (id != null && id != "") {
      this.eventService.setEventId(id);
      this.router.navigate(['/event/' + id]);
    }
  }

  // Eventuser model

  joinEvent(event_name, username) {
    this.eventService.joinEvent(event_name, username).subscribe((response) => {
      if (response != null) {
        this.router.navigate(['/profile']);
      }
    });
    return false;
  }

  cancelEvent(event_name, username) {
    this.eventService.cancelEvent(event_name, username).subscribe((response) => {
      console.log("delete respone : " + response);
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