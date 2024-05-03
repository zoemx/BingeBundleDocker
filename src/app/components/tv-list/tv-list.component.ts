import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MovieApiService } from '../../services/tmdb-api-service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatCardModule],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})
export class TvListComponent {
  tv_titles: any[] = [];
  constructor(private MovieApiService: MovieApiService){
  }
  ngOnInit():void {
    this.MovieApiService.getHomepageTVTitles().subscribe((resp:any)=>{
      // console.log(resp.results[0])
      resp.results.forEach((tv_show: any)=> {
        this.tv_titles.push(tv_show)
      })
    });
  }
  
}