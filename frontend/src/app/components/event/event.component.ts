import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';

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

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventid = this.eventService.getEventId();
    this.getOneEvent(this.eventid);
  }

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

}

interface GetOneEventRespone {
  event_name: string;
  author: string;
  location: string;
  catagory: string;
  content: string;
  start_time: Date;
  end_time: Date;
}