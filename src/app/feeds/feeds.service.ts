import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feeds } from './feeds';


@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  private RSS_URL:string="https://ardeleanasm.github.io/blog/feed.xml";

  private _feedsUrl:string;

  private feeds: Feeds[]=[];
  constructor(private http:HttpClient) { }

  retrieve() {
    fetch(this.RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      
      const items = data.querySelectorAll("item");
      
      items.forEach(el => {
        this.feeds.push({
          title: el.querySelector("title").innerHTML,
          url:el.querySelector("link").innerHTML,
          pubDate: el.querySelector("pubDate").innerHTML
        });
        
      
      });
    });
    return this.feeds;

  }

  get feedsUrl():string {
    return this._feedsUrl;
  }

  set feedsUrl(newUrl:string){
    if (newUrl!="") {
      this._feedsUrl=newUrl;
    }
    
  }
}
