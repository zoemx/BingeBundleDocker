import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieTitle, TVTitle } from '../../interfaces/streaming-Service';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  API_KEY = 'c347zU1xGaZw7K0zHTlUqKmlIZjvFV1qywk9l9C7';

  constructor(private httpClient: HttpClient) {}

  //TODO: limit amount we get back, stick to popular
  //TODO: rename this service bs watchmode is dead to us
  //TODO: Create requests for movies as well as TV
  getHomepageTVTitles(pageNumber: number) {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTExYTBhZDNjN2Y3NGE1ODY3MThkODRlYzdjMTNlNiIsInN1YiI6IjY2MTk1ODA2YWYzZGE2MDE2MzE4OTM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bEGEsfW6lpxXIlOoiGs616XICs0SfBIZlBSXvvVAR1w',
    };
    return this.httpClient.get<TVTitle[]>(
      `https://api.themoviedb.org/3/tv/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSingleMovieTitle() {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTExYTBhZDNjN2Y3NGE1ODY3MThkODRlYzdjMTNlNiIsInN1YiI6IjY2MTk1ODA2YWYzZGE2MDE2MzE4OTM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bEGEsfW6lpxXIlOoiGs616XICs0SfBIZlBSXvvVAR1w',
    };
    return this.httpClient.get<MovieTitle>(
      `https://api.themoviedb.org/3/movie/948549?language=en-US`,
      { headers }
    );
  }

  getHomepageMovieTitles(pageNumber: number) {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTExYTBhZDNjN2Y3NGE1ODY3MThkODRlYzdjMTNlNiIsInN1YiI6IjY2MTk1ODA2YWYzZGE2MDE2MzE4OTM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bEGEsfW6lpxXIlOoiGs616XICs0SfBIZlBSXvvVAR1w',
    };
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/movie/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSearch(searchText: string) {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTExYTBhZDNjN2Y3NGE1ODY3MThkODRlYzdjMTNlNiIsInN1YiI6IjY2MTk1ODA2YWYzZGE2MDE2MzE4OTM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bEGEsfW6lpxXIlOoiGs616XICs0SfBIZlBSXvvVAR1w',
    };
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`,
      { headers }
    );
  }
}
