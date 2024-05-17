import { Component, Provider } from '@angular/core';
import { MovieApiService } from '../../services/tmdb-api-service';
import { CartItem } from '../../../interfaces/cart';
import { streamingServices } from '../../../streaming_services';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule, MatIconButton, MatIcon],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  //to display "*ngIf" a div based on a type???
  // moviesType: MoviesStreamingProvider[] = [
  //   {
  //     mediaTitle: 'movie',
  //     mediaType: 'movie',
  //     id: 948549,
  //     results: {
  //       US: {
  //         link: 'https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=US',
  //         buy: [
  //           {
  //             logo_path: '/9ghgSC0MA082EL6HLCW3GalykFD.jpg',
  //             provider_id: 2,
  //             provider_name: 'Apple TV',
  //             display_priority: 4,
  //           },
  //           {
  //             logo_path: '/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg',
  //             provider_id: 7,
  //             provider_name: 'Vudu',
  //             display_priority: 40,
  //           },
  //         ],
  //         rent: [
  //           {
  //             logo_path: '/seGSXajazLMCKGB5hnRCidtjay1.jpg',
  //             provider_id: 10,
  //             provider_name: 'Amazon Video',
  //             display_priority: 15,
  //             plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //           },
  //           {
  //             logo_path: '/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg',
  //             provider_id: 3,
  //             provider_name: 'Google Play Movies',
  //             display_priority: 16,
  //             plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //           },
  //         ],
  //       },
  //     },
  //   },
  // ];
  // tvType: TVStreamingProvider[] = [
  //   {
  //     mediaType: 'tv',
  //     mediaTitle: 'tv',
  //     id: 948549,
  //     results: {
  //       US: {
  //         link: 'https://www.themoviedb.org/tv/239770-doctor-who/watch?locale=US',
  //         flatrate: [
  //           {
  //             logo_path: '/97yvRBw1GzX7fXprcF80er19ot.jpg',
  //             provider_id: 337,
  //             provider_name: 'Disney Plus',
  //             display_priority: 2,
  //             plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //           },
  //         ],
  //       },
  //     },
  //   },
  // ];

  // // hardcoded test
  // testCart: CartItems[] = [
  //   {
  //     moviesStreamingProviders: [
  //       {
  //         mediaTitle: 'movie',
  //         mediaType: 'movie',
  //         id: 948549,
  //         results: {
  //           US: {
  //             link: 'https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=US',
  //             buy: [
  //               {
  //                 logo_path: '/9ghgSC0MA082EL6HLCW3GalykFD.jpg',
  //                 provider_id: 2,
  //                 provider_name: 'Apple TV',
  //                 display_priority: 4,
  //               },
  //               {
  //                 logo_path: '/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg',
  //                 provider_id: 7,
  //                 provider_name: 'Vudu',
  //                 display_priority: 40,
  //               },
  //             ],
  //             rent: [
  //               {
  //                 logo_path: '/seGSXajazLMCKGB5hnRCidtjay1.jpg',
  //                 provider_id: 10,
  //                 provider_name: 'Amazon Video',
  //                 display_priority: 15,
  //                 plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //               },
  //               {
  //                 logo_path: '/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg',
  //                 provider_id: 3,
  //                 provider_name: 'Google Play Movies',
  //                 display_priority: 16,
  //                 plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //               },
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //     tvStreamingProviders: [
  //       {
  //         mediaType: 'tv',
  //         mediaTitle: 'tv',
  //         id: 948549,
  //         results: {
  //           US: {
  //             link: 'https://www.themoviedb.org/tv/239770-doctor-who/watch?locale=US',
  //             flatrate: [
  //               {
  //                 logo_path: '/97yvRBw1GzX7fXprcF80er19ot.jpg',
  //                 provider_id: 337,
  //                 provider_name: 'Disney Plus',
  //                 display_priority: 2,
  //                 plan: [{ plan: 'Basic', price: '8.99', ads: true }],
  //               },
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //   },
  // ];

  // //////////////
  // // hard coded Providers
  // // this === providers api res + StreamingOptions
  // steamingProviders!:Rent[];

  // //array to save names of providers
  // steamingProvidersNames: string[] = []

  // //get all streaming providers names
  // getStreamingProvidersName(): void{
  //   streamingServices.map((provider : any) => {
  //     this.steamingProvidersNames.push(provider.name)
  //   })
  // }

  //a cart
  cart: CartItem[] = [];

  bundleTotal : number = 0;

  testItem: CartItem[] = [
    {
      provider_name: 'Hulu',
      plan: 'With Ads',
      price: 7.99,
      titles: ['CSI: Crime Scene Investigation', 'Another title', 'Test Title'],
      logo_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hulu_2019.svg/1200px-Hulu_2019.svg.png',
    },
    {
      provider_name: "Netflix",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",      plan: 'Premium',
      price: 22.99,
      titles: ['Love is Blind', 'Batman', 'Superman'],
    },
    {
      provider_name: 'Disney+ Hulu Bundle',
      plan: 'Basic',
      price: 9.99,
      titles: ['Dogs', 'Mario', 'Sleeping Beauty'],
      logo_url:
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hulu_on_Disney%2B_logo.svg',
    },
  ];

  getBundleTotal(){
    this.testItem.map(item => {
      this.bundleTotal += item.price;  
    })
  }

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.getBundleTotal();
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
