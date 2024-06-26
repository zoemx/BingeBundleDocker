import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MovieApiService } from '../../services/tmdb-api-service';
import { MovieTitle, Price, TVTitle } from '../../../interfaces/streaming-Service';
import { StreamingOptions } from '../../../interfaces/streaming-Service';
import { streamingServices } from '../../../streaming_services';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage, Location } from '@angular/common';
import { CartItems } from '../../../interfaces/cart';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule, MatIconButton, MatIcon, MatButtonModule, MatIconModule],

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
    private movieApiServices: MovieApiService,
    private _location: Location,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {} // Inject ActivatedRoute

  // retrieving the media title info/fields
  ngOnInit() {
    // Access the ID using route.snapshot.queryParams['id'] (for initial rendering)
    this.id = this.route.snapshot.queryParams['id'];
    this.type = this.route.snapshot.queryParams['type'];

    if (this.type === 'tv') {
      this.movieApiServices.getTVDetails(this.id).subscribe((res: any) => {
        console.log("Details:" ,res);
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
          networks: res.networks
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
        console.log("Stream", this.steamingProviders)
      })
    }
    if (this.type === 'movie') {
      this.movieApiServices.getMovieDetails(this.id).subscribe((res: any) => {
        console.log("Movie Details:" ,res);
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
        console.log("Movie Services: ", this.steamingProviders)
      })
    }
  }
  backClicked() {
    this._location.back();
  }

  addToCart(provider:StreamingOptions, tvDetails:TVTitle, price:Price):void{
    console.log("Added:", price)
    const newCartItem:CartItems ={
        provider_name: provider.name,
        logo_url: provider.logo_url,
        plan: price.plan,
        price: price.price,
        titles: [tvDetails.name]
    }
    console.log(newCartItem)
    //Next we would add the item to the cart, 
    //we'll check to see if a provider is already in the cart 
    //maybe we'll trigger a modal saying that an existing provider is in the cart 
    //"do you want to swap?"
    this.cartService.addToCart(newCartItem)
    this.snackBar.open(`Added ${newCartItem.provider_name} ${newCartItem.plan} plan to cart`, 'Close', {
      duration: 3000,
    });
  }
  
}

