import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MoveApiService } from '../../services/move-api-service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movie_titles: any[] = [];

  constructor(private MoveApiService: MoveApiService){
  }

  ngOnInit():void{
    //TODO: change this api method to what Lavon and Zoe created last week. 
    //Shami- sorry I needed to change this for a merge conflict
    this.MoveApiService.getHomepageTVTitles().subscribe((resp:any) => {
      console.log(resp);
      resp.results.forEach((movie: any) => {
        this.movie_titles.push(movie);
      })
    })
  }
}
