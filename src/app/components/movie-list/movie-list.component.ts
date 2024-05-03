import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MoveApiService } from '../../services/move-api-service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgOptimizedImage, MatPaginatorModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movie_titles: Set<any> = new Set();
  total_movie_results: number = 100;
  currentpage: number = 0;
  movie_page: number = 1;

  constructor(private MoveApiService: MoveApiService){
  }

  ngOnInit():void{
    //TODO: change this api method to what Lavon and Zoe created last week. 
    //Shami- sorry I needed to change this for a merge conflict
    this.getMovies();
  }
  getMovies(page: number = 1) {
    this.MoveApiService.getHomepageMovieTitles(page).subscribe((resp:any) => {
      // this.total_movie_results = resp.total_results;
      this.movie_titles = resp.results;
      console.log("Movie response: " ,resp);
      resp.results.forEach((movie: any) => {
        this.movie_titles.add(movie);
      });
    });
  }

  pageChangeEvent(pageEvent: PageEvent) {
    this.currentpage = pageEvent.pageIndex;
    this.movie_page = this.currentpage + 1;
    console.log("Movie Page Index: ", this.currentpage);
    console.log("Page number used for API: ", this.movie_page);
    this.getMovies(this.movie_page);
  }
}
