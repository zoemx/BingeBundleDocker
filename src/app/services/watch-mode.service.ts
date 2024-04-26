import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchModeService {
  API_KEY = "c347zU1xGaZw7K0zHTlUqKmlIZjvFV1qywk9l9C7" 
  constructor(private HttpClient: HttpClient) {

   }

   getTitles(){
    return this.HttpClient.get(`https://api.watchmode.com/v1/list-titles/?apiKey=${this.API_KEY}&source_ids=203,57`)
   } 
}
