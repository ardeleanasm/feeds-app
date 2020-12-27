import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from '../items/items.interface';

import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { Item } from '../items/item.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  
  readonly REST_API_SERVER:string = "http://localhost:7000/items";



  
  constructor(private http:HttpClient) { 

  }

  sendGetRequest(){
    return this.http.get<Items>(this.REST_API_SERVER) 
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  
}
