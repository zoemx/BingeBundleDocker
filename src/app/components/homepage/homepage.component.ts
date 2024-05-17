import { Component } from '@angular/core';
import { TvListComponent } from '../../components/tv-list/tv-list.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TvListComponent, MovieListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
