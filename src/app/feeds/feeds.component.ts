import { Component, OnInit } from '@angular/core';
import { Item } from '../items/item.interface';
import { FeedsService } from './feeds.service';
import { Items } from '../items/items.interface';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  
  error:any;
  private receivedItems:Items;
  constructor(private feedsService:FeedsService) { 
    
  }

  ngOnInit():void {
    this.clear();
    this.performRequest();
  }

  performRequest() {
    this.feedsService.sendGetRequest().subscribe(
      (data: Items) => this.receivedItems = {...data},
      error => this.error = error
    )
  }

 

  clear() {
    this.receivedItems = undefined;
    this.error = undefined;
    
  }

  gotItems() {
    return this.receivedItems;
  }

  getFeeds() {
    return this.receivedItems;
  }

}
