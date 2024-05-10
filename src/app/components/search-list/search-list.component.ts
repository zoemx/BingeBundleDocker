import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InternalComponentService } from '../../services/internal-component.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MovieApiService } from '../../services/tmdb-api-service';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage, MatCardModule, MatIconModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent implements OnInit {
  search_results: Set<any> = new Set();
  subscription: any;

  constructor(private ComponentService: InternalComponentService) {}

  ngOnInit():void { 
    this.showSearchResults();
  }

  // ngOnChanges() {
  //   this.search_results.clear();
  //   this.showSearchResults();
  // }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  showSearchResults() {
    this.ComponentService.getResults().subscribe(results => {
      this.search_results.add(results);
      console.log(this.search_results.size)
    });
  }

  

}
