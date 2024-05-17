import { Component, Provider } from '@angular/core';
import { MovieApiService } from '../../services/tmdb-api-service';
import { CartItems } from '../../../interfaces/cart';
import { streamingServices } from '../../../streaming_services';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule, MatIconButton, MatIcon],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  
  cart: CartItems[] = [];

  bundleTotal : number = 0;

  getBundleTotal(){
    this.cart.map(item => {
      this.bundleTotal += item.price;  
    })
  }

  constructor(private movieApiService: MovieApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getBundleTotal();
    this.cartService.getCart().subscribe(cart=>{
      this.cart = cart;
    })
  }
}
