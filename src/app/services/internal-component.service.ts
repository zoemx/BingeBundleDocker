import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieApiService } from './tmdb-api-service';

@Injectable({
  providedIn: 'root'
})
export class InternalComponentService {
  private search_results: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private MovieApiService: MovieApiService) {}
  getResults(): BehaviorSubject<any> {
    return this.search_results;
  }

  getSearchResults(query: string) {
    this.MovieApiService.getSearch(query).subscribe((resp:any) => {
      resp.results.forEach((item: any) => {
        if(item.media_type == 'tv' || item.media_type == 'movie') {
          // console.log(item);
          this.search_results.next(item);
        }
      })
     })
    }
  }
