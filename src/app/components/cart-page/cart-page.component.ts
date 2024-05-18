import { Component } from '@angular/core';
import { CartItems } from '../../../interfaces/cart';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart: CartItems[] = [];

  bundleTotal: number = 0;

  getBundleTotal() {
    this.cart.map((item) => {
      this.bundleTotal += item.price;
    });
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
    this.getBundleTotal();
  }
}
