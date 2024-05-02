import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { WatchModeService } from '../../services/watch-mode.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgOptimizedImage],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movie_titles: any[] = [];

  constructor(private WatchModeService: WatchModeService) {}

  ngOnInit(): void {
    this.WatchModeService.getMovieTitles().subscribe((resp: any) => {
      console.log(resp);
      resp.results.forEach((movie: any) => {
        this.movie_titles.push(movie);
      });
    });
  }
}
