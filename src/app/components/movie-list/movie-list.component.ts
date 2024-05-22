import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MovieApiService } from '../../services/tmdb-api-service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgOptimizedImage, MatPaginatorModule,  RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movie_titles: Set<any> = new Set();
  total_movie_results: number = 100;
  currentpage: number = 0;
  movie_page: number = 1;

  //set up Input for detail page
   
  constructor(private MovieApiService: MovieApiService){
  }

  ngOnInit():void{
    this.getMovies();
  }
  getMovies(page: number = 1) {
    this.MovieApiService.getHomepageMovieTitles(page).subscribe((resp:any) => {
      this.movie_titles = resp.results;
      resp.results.forEach((movie: any) => {
        this.movie_titles.add(movie);
      });
    });
  }

  pageChangeEvent(pageEvent: PageEvent) {
    this.currentpage = pageEvent.pageIndex;
    this.movie_page = this.currentpage + 1;
    this.getMovies(this.movie_page);
  }
}
