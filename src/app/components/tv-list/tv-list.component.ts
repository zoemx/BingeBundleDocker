import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { MovieApiService } from '../../services/tmdb-api-service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    MatPaginatorModule,
  ],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css',
})
export class TvListComponent {
  tv_titles: Set<any> = new Set();
  total_results: number = 100;
  currentPage: number = 0;
  tv_page: number = 1;
  constructor(private MovieApiService: MovieApiService) {}
  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(page: number = 1) {
    this.MovieApiService.getHomepageTVTitles(page).subscribe((resp: any) => {
      // this.total_results = resp.total_results;
      this.tv_titles = resp.results;
      resp.results.forEach((tv_show: any) => {
        this.tv_titles.add(tv_show);
      });
    });
  }

  pageChangeEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.tv_page = this.currentPage + 1;
    console.log(this.currentPage);
    console.log(this.tv_page);
    this.getTvShows(this.tv_page);
  }
}
