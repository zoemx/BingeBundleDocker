import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchModeService } from './services/watch-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binge-bundler';
  titles: any[] = [];

  constructor(private WatchModeService: WatchModeService){
  }

  ngOnInit():void{
    this.WatchModeService.getTitles().subscribe((resp:any)=>{
      console.log(resp);
      this.titles = resp.results;
    })
    console.log(this.titles);
  }
}
