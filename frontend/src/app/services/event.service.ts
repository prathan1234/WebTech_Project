import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class EventService {
  private eventid;

  constructor(private http: Http) { }

  getEventId() {
    return this.eventid;
  }

  setEventId(id) {
    this.eventid = id;
  }

  getAllEvent() {
    return this.http.get("http://localhost:3000/event/all")
    .map((res) => res.json());
  }

  getOneEvent(id) {
    return this.http.get("http://localhost:3000/event/" + id)
    .map((res) => res.json());
  }

  getUserEvent(author) {
    return this.http.get("http://localhost:3000/event/findbyuser/" + author)
    .map((res) => res.json());
  }

  searchEvent() {

  }

  addEvent(eventname, author, location, catagory, content, starttime, endtime) {
    let body = {
      "event_name": eventname,
      "author": author,
      "location": location,
      "catagory": catagory,
      "content": content,
      "starttime": starttime,
      "endtime": endtime
    };

    return this.http.post("http://localhost:3000/event/create", body)
    .map((res) => res.json());
  }

  editEvent() {

  }

  deleteEvent(id) {
    return this.http.get("http://localhost:3000/event/remove/" + id);    
  }
}
