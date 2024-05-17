import { Component } from '@angular/core';
import { MovieApiService } from '../services/tmdb-api-service';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart: Cart[] = [];

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.getMoviesProviders();
    this.getTVProviders();
  }

  getMoviesProviders() {
    this.movieApiService.getMovieProviders(948549).subscribe((res: any) => {
      console.log('this is movies providers:', res.results);
    });
  }
  getTVProviders() {
    this.movieApiService.getMovieProviders(239770).subscribe((res: any) => {
      console.log('this is tv providers:', res.results);
    });
  }
}
