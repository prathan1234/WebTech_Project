import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isLogin: Boolean;
  private isShow: Boolean = false;

  private keyword: string;
  private catagory: string;

  constructor(private loginService:LoginService, private eventService: EventService) { }

  ngOnInit() {
  }

  showSearch(keyword) {
    this.isShow = true;
    this.keyword = keyword;
    this.eventService.setKeyword(this.keyword);
    this.eventService.setCatagory(this.catagory);
  }

  getCatagory(catagory) {
    this.catagory = catagory;
  }
}
