import { Component, Provider } from '@angular/core';
import { MovieApiService } from '../../services/tmdb-api-service';
import { Cart, CartItems } from '../../../interfaces/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  // cartTotal: Cart[] = [{this.testCart}];

  testCart: CartItems[] = [
    {
      moviesStreamingProviders: [
        {
          mediaTitle: 'movie',
          mediaType: 'movie',
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
              ],
              rent: [
                {
                  logo_path: '/seGSXajazLMCKGB5hnRCidtjay1.jpg',
                  provider_id: 10,
                  provider_name: 'Amazon Video',
                  display_priority: 15,
                  plan: [{ plan: 'Basic', price: '8.99', ads: true }],
                },
                {
                  logo_path: '/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg',
                  provider_id: 3,
                  provider_name: 'Google Play Movies',
                  display_priority: 16,
                  plan: [{ plan: 'Basic', price: '8.99', ads: true }],
                },
              ],
            },
          },
        },
      ],
      tvStreamingProviders: [
        {
          mediaType: 'tv',
          mediaTitle: 'tv',
          id: 948549,
          results: {
            US: {
              link: 'https://www.themoviedb.org/tv/239770-doctor-who/watch?locale=US',
              flatrate: [
                {
                  logo_path: '/97yvRBw1GzX7fXprcF80er19ot.jpg',
                  provider_id: 337,
                  provider_name: 'Disney Plus',
                  display_priority: 2,
                  plan: [{ plan: 'Basic', price: '8.99', ads: true }],
                },
              ],
            },
          },
        },
      ],
    },
  ];

  // testCart: Cart =

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.getMoviesProviders();
    this.getTVProviders();
  }

  getMoviesProviders() {
    this.movieApiService.getMovieProviders(948549).subscribe((res: any) => {
      console.log('+++Movie Providers+++++', res);
    });
  }
  getTVProviders() {
    this.movieApiService.getTVProviders(239770).subscribe((res: any) => {
      console.log('+++TV Providers+++++', res);
    });
  }
}
