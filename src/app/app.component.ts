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
    this.WatchModeService.getTitles().subscribe((resp: any)=>{
      console.log(resp)
      this.titles = resp.results.map((item: any): TVTitle =>{
        //the response object will always be what the API gives us 
        //so we need to specifcally map the results we want ourselves 
        //defining the fields we want will ensure we don't deal with excess data
        return {
          name: item.name,
          backdrop_path: item.backdrop_path,
          first_air_date: item.first_air_date,
          //genres: item.genres
          id: item.id,
          //languages?: item.languages
          
         //// number_of_episodes: number
          //number_of_seasons: number
          origin_country: item.origin_country,
          original_language: item.original_language,
          original_name: item.original_name,
          overview: item.overview,
          poster_path: item.poster_path,
          //spoken_languages?: item.spoken_languages,
          //tagline?: string
        }
      } )
      console.log(this.titles)
    });
     this.WatchModeService.getTitle().subscribe((resp:MovieTitle)=>{
      this.title = {
        genres: resp.genres,
        id: resp.id,
        imdb_id: resp.imdb_id,
        origin_country: resp.origin_country,
        original_language: resp.original_language,
        original_title: resp.original_title,
        overview: resp.overview,
        release_date: resp.release_date,
        runtime: resp.runtime,
        spoken_languages: resp.spoken_languages,
        tagline: resp.tagline,
        title: resp.title
      }
      console.log(this.title);
    })

  }
}
