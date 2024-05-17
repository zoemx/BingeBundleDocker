import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchListComponent } from './components/search-list/search-list.component';

//import our components here

//define routes here
export const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'search', component: SearchListComponent},
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
