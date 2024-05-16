import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieApiService } from './tmdb-api-service';
import { SearchTitles } from '../../interfaces/streaming-Service';

@Injectable({
  providedIn: 'root'
})
export class MediaSearchService {
  private search_results: BehaviorSubject<SearchTitles[]> =
  new BehaviorSubject<SearchTitles[]>([]);

  constructor(private MovieApiService: MovieApiService) {}
  getResults(): Observable<SearchTitles[]> {
    return this.search_results.asObservable();
  }

  getSearchResults(query: string) {
    this.MovieApiService.getSearch(query).subscribe((resp: any) => {
      const filteredResults = resp.results.filter(
        (item: any) =>
          ((item.media_type == 'tv' || item.media_type == 'movie') &&
            item.backdrop_path) || item.poster_path )
            .map((item:any)=> ({
              backdrop_path: item.backdrop_path,
              original_title: item.original_title,
              poster_path: item.poster_path,
              media_type: item.media_type,
              title: item.title,
              name: item.name,
              original_name: item.original_name,
            }));
      this.search_results.next(filteredResults);
    });
  }
}
