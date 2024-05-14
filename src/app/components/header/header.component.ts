import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MovieApiService } from '../../services/tmdb-api-service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MediaSearchServiceService } from '../../services/media-search-service.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private MediaSearchService: MediaSearchServiceService){}
 
 
  search(searchText:string) {
    console.log(searchText)
    this.MediaSearchService.getSearchResults(searchText)
  }

ngOnInit():void{}


}
