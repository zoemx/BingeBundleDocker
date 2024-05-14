import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieApiService } from './tmdb-api-service';

@Injectable({
  providedIn: 'root'
})
export class MediaSearchServiceService {
  private search_results: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor(private MovieApiService: MovieApiService) {}
  getResults(): Observable<any[]> {
    return this.search_results.asObservable();
  }

  getSearchResults(query: string) {
    this.MovieApiService.getSearch(query).subscribe((resp: any) => {
      const filteredResults = resp.results.filter(
        (item: any) =>
          ((item.media_type == 'tv' || item.media_type == 'movie') &&
            item.backdrop_path) || item.poster_path );
      this.search_results.next(filteredResults);
    });
  }
}
