import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaSearchServiceService } from '../../services/media-search-service.service';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage, MatCardModule, MatIconModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent implements OnInit {
  search_list: any[] = [];
  subscription: Subscription | null = null;

  constructor(private MediaSearchService: MediaSearchServiceService) {}

  ngOnInit():void {
    this.showSearchResults();
    console.log("Search" ,this.search_list);
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  showSearchResults() {
    console.log("Search List Length", this.search_list.length);
    this.MediaSearchService.getResults().subscribe(response => {
      console.log(response);
      this.search_list = response;
      console.log("Search List Length", this.search_list.length);
    });
  }
}
