// cartItem

export interface Cart {
  cartId: number;
  cartItems: CartItems[];
}

export interface CartItems {
  provider_name: string;
  logo_url: string; 
  plan: string; 
  price: number; 
  titles: string[];
}


// export interface CartItems {
//   moviesStreamingProviders: MoviesStreamingProvider[];
//   tvStreamingProviders: TVStreamingProvider[];
// }

// //Movies Providers res
// export interface MoviesStreamingProvider {
//   mediaType: string
//   mediaTitle: string;
//   id: number;
//   results: {
//     US: {
//       link: string;
//       buy?: Buy[];
//       rent: Rent[];
//     };
//   };
// }

// //TV Providers res
// export interface TVStreamingProvider {
//   mediaType: string
//   mediaTitle: string;
//   id: number;
//   results: {
//     US: {
//       link: string;
//       flatrate: Rent[];
//     };
//   };
// }

// export interface Buy {
//   logo_path: string;
//   provider_id: number;
//   provider_name: string;
//   display_priority?: number;
//   price?: Plans[];
// }

// export interface Rent {
//   logo_path: string;
//   provider_id: number;
//   provider_name: string;
//   display_priority?: number;
//   plan: Plans[];
// }

// export interface Plans {
//   plan: string;
//   price: string;
//   ads: boolean;
// }

// Example response from https://api.themoviedb.org/3/movie/{movie_id}/watch/providers

/**
 * 
 * {
  "id": 948549,
  "results": {
    "AU": {
      "link": "https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=AU",
      "rent": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 10
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 12
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 13
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 17
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 21
        }
      ],
      "buy": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 10
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 12
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 13
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 17
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 21
        }
      ]
    },
    "CA": {
      "link": "https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=CA",
      "rent": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 6
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 8
        },
        {
          "logo_path": "/d1mUAhpJpxy0YMjwVOZ4lxAAbeT.jpg",
          "provider_id": 140,
          "provider_name": "Cineplex",
          "display_priority": 19
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 23
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 37
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 61
        }
      ],
      "buy": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 6
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 8
        },
        {
          "logo_path": "/d1mUAhpJpxy0YMjwVOZ4lxAAbeT.jpg",
          "provider_id": 140,
          "provider_name": "Cineplex",
          "display_priority": 19
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 23
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 37
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 61
        }
      ]
    },
    "NZ": {
      "link": "https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=NZ",
      "buy": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 6
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 9
        }
      ],
      "rent": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 6
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 9
        }
      ]
    },
    "US": {
      "link": "https://www.themoviedb.org/movie/948549-love-lies-bleeding/watch?locale=US",
      "buy": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 15
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 16
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 17
        },
        {
          "logo_path": "/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg",
          "provider_id": 7,
          "provider_name": "Vudu",
          "display_priority": 40
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 50
        }
      ],
      "rent": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
          "provider_id": 10,
          "provider_name": "Amazon Video",
          "display_priority": 15
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 16
        },
        {
          "logo_path": "/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
          "provider_id": 192,
          "provider_name": "YouTube",
          "display_priority": 17
        },
        {
          "logo_path": "/i6lRmkKmJ23oOZ6IyjnOYLKxA9J.jpg",
          "provider_id": 7,
          "provider_name": "Vudu",
          "display_priority": 40
        },
        {
          "logo_path": "/5vfrJQgNe9UnHVgVNAwZTy0Jo9o.jpg",
          "provider_id": 68,
          "provider_name": "Microsoft Store",
          "display_priority": 50
        },
        {
          "logo_path": "/aAb9CUHjFe9Y3O57qnrJH0KOF1B.jpg",
          "provider_id": 486,
          "provider_name": "Spectrum On Demand",
          "display_priority": 152
        }
      ]
    }
  }
}
 */
