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
  ]; */

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
