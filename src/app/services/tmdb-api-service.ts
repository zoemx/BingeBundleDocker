import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieTitle, TVTitle } from '../../interfaces/streaming-Service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  API_KEY = environment.apiKey;

  constructor(private httpClient: HttpClient) {}

  getHomepageTVTitles(pageNumber: number) {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<TVTitle[]>(
      `${environment.baseUrl}/tv/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSingleMovieTitle() {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<MovieTitle>(
      `${environment.baseUrl}/movie/948549?language=en-US`,
      { headers }
    );
  }

  getHomepageMovieTitles(pageNumber: number) {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/movie/popular?page=${pageNumber}&limit=100`,
      { headers }
    );
  }

  getSearch(searchText: string) {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`,
      { headers }
    );
  }

  getTVDetails(seriesId: number) {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/tv/${seriesId}`,
      { headers }
    );
  }

  getMovieDetails(movieId: number) {
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/movie/${movieId}`,
      { headers }
    );
  }
  
  // Tv providers api call
  getMovieProviders(movieId: number){
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/movie/${movieId}/watch/providers`,
      { headers }
    );
  }

  //Tv providers api call
  getTVProviders(seriesId: number){
    const headers = {
      Authorization:environment.bearerToken,
    };
    return this.httpClient.get<any>(
      `${environment.baseUrl}/tv/${seriesId}/watch/providers`,
      { headers }
    );
  }
}
