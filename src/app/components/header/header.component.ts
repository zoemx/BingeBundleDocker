import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { MovieApiService } from '../../services/tmdb-api-service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MediaSearchService } from '../../services/media-search-service.service';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbar, MatTooltip, MatIconModule, MatInputModule, RouterLink, RouterLinkActive, RouterOutlet, MatIconButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private MediaSearchService: MediaSearchService){}
 
 
  search(searchText:string) {
    console.log(searchText)
    this.MediaSearchService.getSearchResults(searchText)
  }

ngOnInit():void{}


}
