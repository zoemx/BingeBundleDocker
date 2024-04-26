import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { WatchModeService } from './services/watch-mode.service';
import { HeaderComponent } from './components/header/header.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    HeaderComponent,
    TvListComponent,
    MovieListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: any;
  cards: any;
  tv_titles: any[] = [];

}
