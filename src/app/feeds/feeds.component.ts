import { Component, OnInit } from '@angular/core';
import { Feeds } from './feeds';
import { FeedsService } from './feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  private feeds:Feeds[]=undefined;

  constructor(private feedsService:FeedsService) { }

  ngOnInit(): void {
    this.feeds=this.feedsService.retrieve();

  }


  getFeeds(){
    return this.feeds;
  }
}
