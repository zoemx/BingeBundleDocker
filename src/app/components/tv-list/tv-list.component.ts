import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

import { WatchModeService } from '../../services/watch-mode.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatCardModule, NgOptimizedImage, MatPaginatorModule],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css',
})
export class TvListComponent {
  tv_titles: Set<any> = new Set();
  total_results!: number;
  currentPage: number = 0;
  movie_page: number = 1;
  constructor(private WatchModeService: WatchModeService) {}
  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(page: number = 1) {
    this.WatchModeService.getTitles(page).subscribe((resp: any) => {
      this.total_results = resp.total_results;
      this.tv_titles = resp.results;
      resp.results.forEach((tv_show:any) => {
        this.tv_titles.add(tv_show)
      })
    })
  }

  // this.WatchModeService.getTitles(this.movie_page).subscribe((resp: any) => {
  //   console.log(resp);
  //    this.total_results = resp.total_results
  //    console.log(this.total_results);
  //    resp.results.forEach((tv_show: any) => {
  //      this.tv_titles.push(tv_show);
  //    });
  //  });

  pageChangeEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.movie_page = this.currentPage +1;
    console.log(this.currentPage);
    console.log(this.movie_page);
    this.getTvShows(this.movie_page);
  }
}
