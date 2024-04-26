import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { WatchModeService } from './services/watch-mode.service';


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
  title: any;
  cards: any;
  titles: any[] = [];

  constructor(private WatchModeService: WatchModeService){
  }

  ngOnInit():void{
    this.WatchModeService.getTitles().subscribe((resp:any)=>{
      console.log(resp);
      this.titles = resp.results;
    });
    /* this.WatchModeService.getTitle().subscribe((resp:any)=>{
      console.log(resp);
      this.title = resp.results;
    }) */
    console.log(this.title);
  }
}
