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
import { MovieTitle, TVTitle } from '../interfaces/streaming-Service';


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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: MovieTitle = {
      genres: [],
      id: 1,
      imdb_id: "",
      origin_country: [],
      original_language: "",
      original_title: "",
      overview: "",
      release_date: "",
      runtime: 0,
      spoken_languages: [],
      tagline: "",
      title: ""
  }
  cards: any;
  titles: TVTitle[] = [];

  constructor(private WatchModeService: WatchModeService){
  }

  ngOnInit():void{
    this.WatchModeService.getTitles().subscribe((resp:TVTitle[])=>{
      this.titles = resp;
      console.log(this.titles)
    });
     this.WatchModeService.getTitle().subscribe((resp:MovieTitle)=>{

      console.log("Original Title:", this.title)
      console.log("Response:", resp)
      this.title = resp;
      console.log("MOVIE TITLE:", this.title)
    })
    console.log(this.titles);
  }
}
