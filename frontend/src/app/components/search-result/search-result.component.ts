import { Component, OnInit } from '@angular/core';

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

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getAllEvent();
  }

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