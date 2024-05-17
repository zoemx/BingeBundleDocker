import { Injectable } from '@angular/core';
import { Cart, CartItems } from '../../interfaces/cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<CartItems[]> =
  new BehaviorSubject<CartItems[]>([]);
 
  constructor() { }

  getCart():Observable<CartItems[]>{
    return this.cart.asObservable();
  }

  addToCart(cartItem:CartItems):void{
    //get provider name
    const provider = cartItem.provider_name;
    //check if provider is already in cart, if it is swap! 
    const currentCart = this.cart.getValue();

    //TODO: take into account exisiting titles and swap out plans and prices accordingly.
    //check for existing Titles
/*     const allTitles:any[] = [];
    for(const provider of currentCart){
      allTitles.push(provider.titles)
    }
    console.log(allTitles.flat(), cartItem.titles[0])
    //if the movie or show is already in the cart
    if (allTitles.flat().includes(cartItem.titles[0])){
        console.log("you've already added this title, so we'll swap it")
        //check if it has a different provider or plan 
        //first, find where this title is 
        const existing = currentCart.find(provider=> provider.titles.includes(cartItem.titles[0]))
        if(existing?.provider_name !== cartItem.provider_name){
          //swap out this title and the provider 
        }
        
    } */
    const existingProvider = currentCart.find(item => item.provider_name === cartItem.provider_name);
    if (existingProvider) {
      const updatedProvider = existingProvider;
      //if adding to an existing provider, check the titles
      if(!existingProvider.titles.includes(cartItem.titles[0])){
        const updatedTitles = [...existingProvider.titles, cartItem.titles[0]]
        updatedProvider.titles = updatedTitles 
      }

      if(existingProvider.plan !== cartItem.plan){
        console.log("plans are different, updating: ", existingProvider.plan, "to ", cartItem.plan)
        updatedProvider.plan = cartItem.plan;
        updatedProvider.price = cartItem.price;
      }

      console.log("Updating");
      const index = currentCart.indexOf(existingProvider);
      const updatedCart = [...currentCart]; // Spread operator to create a copy
      updatedCart.splice(index, 1, updatedProvider); // Replace item at index
      this.cart.next(updatedCart);
    } else {
      // If not found, add the new provider to the cart
      this.cart.next([...currentCart, cartItem]); // Spread operator to create new array
    }
    console.log(this.cart.getValue())
  }
}
