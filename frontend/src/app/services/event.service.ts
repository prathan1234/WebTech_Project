import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class EventService {
  // Event variable
  private eventid;

  // Eventuser variable
  private event_name;
  private username;

  constructor(private http: Http) { }

  // Event model

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

  getEvent(event_name) {
    return this.http.get("http://localhost:3000/event/get/" + event_name)
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

  // Eventuser model

  getAllUserInEvent() {
    return this.http.get("http://localhost:3000/eventuser/all")
    .map((res) => res.json());
  }

  getUserByEvent(event_name) {
    return this.http.get("http://localhost:3000/eventuser/" + event_name)
    .map((res) => res.json());
  }

  getEventByUser(username) {
    return this.http.get("http://localhost:3000/eventuser/event/" + username)
    .map((res) => res.json());
  }

  joinEvent(event_name, username) {
    let body = {
      "event_name": event_name,
      "username": username
    };

    return this.http.post("http://localhost:3000/eventuser/join", body)
    .map((res) => res.json());
  }

  cancelEvent(event_name, username) {
    let body = {
      "event_name": event_name,
      "username": username
    };

    return this.http.post("http://localhost:3000/eventuser/cancel", body);    
  }

}
