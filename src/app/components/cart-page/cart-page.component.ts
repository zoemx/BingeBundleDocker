import { Component, Provider } from '@angular/core';
import { MovieApiService } from '../../services/tmdb-api-service';
import { Cart, StreamingProvider,  } from '../../../interfaces/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})

export class CartPageComponent {
  cart: Cart[] = [];
  streamingProviders : StreamingProvider = {
    id: 0,
    results: {
      US:{
        link: "",
        buy: [],
        rent: []
      }
    }
  };

  testCart: Cart = {
    cartId: 0,
    cartItems: [
      {
        itemId: 948549,
        mediaTitle: 'TEST',
        streamingProviders: {
          id: 948549,
          results: {
            US: {
              link: 'https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=US',
              buy: [
                {
                  logo_path: '/9ghgSC0MA082EL6HLCW3GalykFD.jpg',
                  provider_id: 2,
                  provider_name: 'Apple TV',
                  display_priority: 4,
                },
                {
                  logo_path: '/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg',
                  provider_id: 7,
                  provider_name: 'Vudu',
                  display_priority: 40,
                },
                {
                  logo_path: '/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg',
                  provider_id: 68,
                  provider_name: 'Microsoft Store',
                  display_priority: 50,
                },
              ],
              rent: [
                {
                  logo_path: '/9ghgSC0MA082EL6HLCW3GalykFD.jpg',
                  provider_id: 2,
                  provider_name: 'Apple TV',
                  display_priority: 4,
                },
                {
                  logo_path: '/seGSXajazLMCKGB5hnRCidtjay1.jpg',
                  provider_id: 10,
                  provider_name: 'Amazon Video',
                  display_priority: 15,
                },
                {
                  logo_path: '/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg',
                  provider_id: 3,
                  provider_name: 'Google Play Movies',
                  display_priority: 16,
                },
              ],
            },
          },
        },
      },
    ],
  };

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.getMoviesProviders();
    this.getTVProviders();
  }

  getMoviesProviders() {
    this.movieApiService.getMovieProviders(948549).subscribe((res: any) => {
      this.streamingProviders.id = res.id
      this.streamingProviders.results = res.results
      console.log('+++PROVIDERS+++++', this.streamingProviders);
    });
  }
  getTVProviders() {
    this.movieApiService.getTVProviders(239770).subscribe((res: any) => {});
  }
}
