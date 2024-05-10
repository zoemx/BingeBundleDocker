import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MovieApiService } from '../../services/tmdb-api-service';
import { InternalComponentService } from '../../services/internal-component.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private ComponentService: InternalComponentService){}
 
 
  search(searchText:string) {
    console.log(searchText)
    this.ComponentService.getSearchResults(searchText)
  }

ngOnInit():void{
 
// this.MovieApiService.getSearch(searchText).subscribe((results:any)=> {console.log("Search Results: ",results)})
}


}
