import { Component, OnInit } from '@angular/core';
import { Item } from '../items/item.interface';
import { EntryService } from './entry.service';
import { Items } from '../items/items.interface';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  
  error:any;
  private receivedItems:Items;
  constructor(private entriesService:EntryService) { 
    
  }

  ngOnInit():void {
    this.clear();
    this.performRequest();
  }

  performRequest() {
    this.entriesService.sendGetRequest().subscribe(
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

  getItems() {
    return this.receivedItems;
  }

}
