import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MovieApiService } from '../../services/tmdb-api-service';
import { MovieTitle, TVTitle } from '../../../interfaces/streaming-Service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StreamingOptions } from '../../../interfaces/streaming-Service';
import { streamingServices } from '../../../streaming_services';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css',
})
export class DetailsPageComponent {
  // id of movie or tv from "query_params"
  id!: number;
  
  // type of media title
  type!: string;

  // the movie data
  movieDetails!: MovieTitle;

  // the tv data
  tvDetails!: TVTitle;

  // the streaming service information 
  steamingProviders!:StreamingOptions[];

  constructor(
    private route: ActivatedRoute,
    private movieApiServices: MovieApiService
  ) {} // Inject ActivatedRoute

  // retrieving the media title info/fields
  ngOnInit() {
    // Access the ID using route.snapshot.queryParams['id'] (for initial rendering)
    this.id = this.route.snapshot.queryParams['id'];
    this.type = this.route.snapshot.queryParams['type'];

    if (this.type === 'tv') {
      this.movieApiServices.getTVDetails(this.id).subscribe((res: any) => {
        // console.log(res);
        this.tvDetails = {
          name: res.name,
          backdrop_path: res.backdrop_path,
          first_air_date: res.first_air_date,
          id: res.id,
          origin_country: res.origin_country,
          original_language: res.original_language,
          original_name: res.original_name,
          overview: res.overview,
          poster_path: res.poster_path,
          spoken_languages: res.spoken_languages,
          tagline: res.tagline,
          languages: res.languages,
          genres: res.genres,
          number_of_episodes: res.number_of_episodes,
          number_of_seasons: res.number_of_seasons,
        };
      });
      this.movieApiServices.getTVProviders(this.id).subscribe((res: any)=>{
        //get only the US streaming providers 
        const usData = res.results['US']
        //get only the flatrate ones, and map through 
        this.steamingProviders = usData.flatrate.map((provider: any) => {
          const matchingService = streamingServices.find((service) =>
            service.name === provider.provider_name ||
            service.other_names?.includes(provider.provider_name)
          );
          return matchingService; // Only return the matching service (no null)
        })
        .filter((service:any) => service);
        console.log(this.steamingProviders)
      })
    }
    if (this.type === 'movie') {
      this.movieApiServices.getMovieDetails(this.id).subscribe((res: any) => {
        // console.log(res);
        this.movieDetails = {
          genres: res.genres,
          id: res.id,
          imdb_id: res.imdb_id,
          origin_country: res.origin_country,
          original_language: res.original_language,
          original_title: res.original_title,
          overview: res.overview,
          release_date: res.release_date,
          runtime: res.runtime,
          spoken_languages: res.spoken_languages,
          tagline: res.tagline,
          title: res.title,
          poster_path: res.poster_path
        };
      });
      //TODO: some movies are not available to stream, will need to consider this when displaying 
      //provider info in html file. 
      this.movieApiServices.getMovieProviders(this.id).subscribe((res: any)=>{
        //get only the US streaming providers 
        const usData = res.results['US']
        //get only the flatrate ones, and map through 
        console.log(res.results)
        this.steamingProviders = usData.flatrate.map((provider: any) => {
          const matchingService = streamingServices.find((service) =>
            service.name === provider.provider_name ||
            service.other_names?.includes(provider.provider_name)
          );
          return matchingService; // Only return the matching service (no null)
        })
        .filter((service:any) => service);
        console.log(this.steamingProviders)
      })
    }
  }
}
